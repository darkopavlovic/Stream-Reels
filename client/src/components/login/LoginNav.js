import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import axios from "axios";

const loginTwitch = async () => {
  await axios.get("http://localhost:5000/auth/twitch/callback");
};

function LoginNav() {
  return (
    <>
      <AppBar style={{ background: "#9146FF" }}>
        <Toolbar>
          <MovieFilterIcon fontSize="large" style={{ paddingRight: "5px" }} />
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Stream Reels
          </Typography>
          <Button variant="contained" disableElevation={true} size="large" onClick={loginTwitch} style={{ background: "#F0F0FF", color: "black", fontWeight: "bold" }}>
            Login with Twitch
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default LoginNav;
