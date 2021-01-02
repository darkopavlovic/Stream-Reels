import { useState, useEffect, useContext } from "react";
import { Button, Box, Container } from "@material-ui/core";
import { AppContext } from "../../context/AppContext";
import Clip from "../clip/Clip";
import axios from "axios";

function HomeContent() {
  const [clips, setClips] = useState([]);
  const { theme, range, count, pagination } = useContext(AppContext);
  const [darkTheme] = theme;
  const [period] = range;
  const [page, setPage] = count;
  const [cursor, setCursor] = pagination;

  // Get top clips from Twitch
  async function getClips() {
    try {
      const response = await axios.get(`https://streamreels.herokuapp.com/twitch/trending/${period}/${cursor}`);
      if (response.data.length !== 0) {
        setCursor(response.data._cursor);
        setClips(response.data.clips);
      }
    } catch {
      setClips([]);
    }
  }

  // Loads next page of clips
  function nextPage() {
    setPage(page + 1);
  }

  // Calls getClips on period and page update
  useEffect(() => {
    window.scrollTo(0, 0);
    getClips();
    // eslint-disable-next-line
  }, [period, page]);

  return (
    <>
      <Box style={darkTheme ? { background: "#262626" } : { background: "#F0F0FF" }}>
        <Container maxWidth="md" disableGutters={true} style={{ paddingTop: "60px" }}>
          {clips.map((clip) => (
            <Clip key={clip.slug} clip={clip} />
          ))}
          <Box style={{ textAlign: "center" }}>
            <Button variant="contained" onClick={nextPage} style={{ background: "#9146FF", color: "white", marginTop: "20px", marginBottom: "20px" }}>
              Load More
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default HomeContent;
