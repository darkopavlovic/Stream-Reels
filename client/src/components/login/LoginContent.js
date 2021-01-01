import { Box, Button, Typography } from "@material-ui/core";
import AppleStore from "../assets/app-store-badge.svg";
import GooglePlay from "../assets/play-store-badge.svg";

function LoginContent() {
  return (
    <>
      <Box style={{ paddingTop: "100px", paddingBottom: "25px", textAlign: "center" }}>
        <Typography variant="h2" style={{ paddingBottom: "10px" }}>
          Viral Twitch Moments
        </Typography>
        <Typography variant="h5">Download Now</Typography>
        <Button href="" target="_blank" rel="noopener noreferrer">
          <img src={AppleStore} alt="App Store Link" />
        </Button>
        <Button href="" target="_blank" rel="noopener noreferrer">
          <img src={GooglePlay} alt="Google Play Link" />
        </Button>
      </Box>
      <Box style={{ background: "black", paddingTop: "5px" }}>
        <video width="20%" height="720" autoPlay loop muted style={{ objectFit: "cover", outline: "none" }}>
          <source src={`https://clips-media-assets2.twitch.tv/vod-808387096-offset-408.mp4`} type="video/mp4" />
        </video>
        <video width="20%" height="720" autoPlay loop muted style={{ objectFit: "cover", outline: "none" }}>
          <source src={`https://clips-media-assets2.twitch.tv/AT-cm%7C971331099.mp4`} type="video/mp4" />
        </video>
        <video width="20%" height="720" autoPlay loop muted style={{ objectFit: "cover", outline: "none" }}>
          <source src={`https://clips-media-assets2.twitch.tv/AT-cm%7C983708185.mp4`} type="video/mp4" />
        </video>
        <video width="20%" height="720" autoPlay loop muted style={{ objectFit: "cover", outline: "none" }}>
          <source src={`https://clips-media-assets2.twitch.tv/AT-cm%7C974324223.mp4`} type="video/mp4" />
        </video>
        <video width="20%" height="720" autoPlay loop muted style={{ objectFit: "cover", outline: "none" }}>
          <source src={`https://clips-media-assets2.twitch.tv/AT-cm%7C985470698.mp4`} type="video/mp4" />
        </video>
      </Box>
    </>
  );
}

export default LoginContent;
