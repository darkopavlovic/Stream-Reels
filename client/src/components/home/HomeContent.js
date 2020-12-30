import { useState, useEffect, useContext } from "react";
import { Box, Container } from "@material-ui/core";
import { AppContext } from "../../context/AppContext";
import Clip from "../clip/Clip";
import "./Content.css";
import axios from "axios";

function HomeContent() {
  const [clips, setClips] = useState([]);
  const { time, clientId, theme } = useContext(AppContext);
  const [darkTheme] = theme;
  const [period] = time;

  // Get top clips from Twitch
  async function getClips() {
    try {
      const response = await axios.get(`https://api.twitch.tv/kraken/clips/top?period=${period}&limit=20`, { headers: { "Client-ID": clientId, "Accept": "application/vnd.twitchtv.v5+json" } });

      if (response.data.clips.length !== 0) {
        setClips(response.data.clips);
      }
    } catch (e) {
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
        <Container maxWidth="sm" disableGutters={true}>
          {clips.map((clip) => (
            <Clip key={clip.slug} clip={clip} />
          ))}
        </Container>
      </Box>
    </>
  );
}

export default HomeContent;
