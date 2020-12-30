import { Box, Button, Typography } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import ShopIcon from "@material-ui/icons/Shop";

function LoginContent() {
  return (
    <>
      <Box style={{ paddingTop: "100px", paddingBottom: "35px", textAlign: "center" }}>
        <Typography variant="h2" style={{ fontWeight: "bold" }}>
          Viral Twitch Moments
        </Typography>
        <Typography variant="h5" style={{ paddingBottom: "15px" }}>
          Download Now
        </Typography>
        <Button variant="contained" disableElevation={true} size="medium" href="https://www.twitch.tv" style={{ background: "black", color: "white", fontWeight: "bold", width: "168px", marginRight: "10px" }}>
          <AppleIcon fontSize="large" style={{ paddingRight: "3px" }} />
          App Store
        </Button>
        <Button variant="contained" disableElevation={true} size="medium" href="https://www.twitch.tv" style={{ background: "black", color: "white", fontWeight: "bold", width: "168px" }}>
          <ShopIcon fontSize="large" style={{ paddingRight: "5px" }} />
          Google Play
        </Button>
      </Box>
      <Box>
        <video width="100%" height="900" autoPlay loop muted style={{ display: "block", objectFit: "cover" }}>
          <source src={`https://clips-media-assets2.twitch.tv/AT-cm%7C970905205.mp4`} type="video/mp4" />
        </video>
      </Box>
    </>
  );
}

export default LoginContent;
