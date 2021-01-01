import { useState, useEffect, useContext } from "react";
import { Box, Container } from "@material-ui/core";
import { AppContext } from "../../context/AppContext";
import Clip from "../clip/Clip";
import axios from "axios";

function HomeContent() {
  const [clips, setClips] = useState([]);
  const [cursor, setCursor] = useState("");
  const { theme, range } = useContext(AppContext);
  const [darkTheme] = theme;
  const [period] = range;

  // Get top clips from Twitch
  async function getClips() {
    try {
      const response = await axios.get(`http://localhost:5000/twitch/trending/${period}`);
      if (response.data.length !== 0) {
        setCursor(response.data._cursor);
        setClips(response.data.clips);
      }
    } catch {
      setClips([]);
    }
  }

  // Calls getClips on period update
  useEffect(() => {
    getClips();
    // eslint-disable-next-line
  }, [period]);

  return (
    <>
      <Box style={darkTheme ? { background: "#262626" } : { background: "white" }}>
        <Container maxWidth="md" disableGutters={true} style={{ paddingTop: "60px", paddingBottom: "30px" }}>
          {clips.map((clip) => (
            <Clip key={clip.slug} clip={clip} />
          ))}
        </Container>
      </Box>
    </>
  );
}

export default HomeContent;
