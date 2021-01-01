import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

function LoginNav() {
  return (
    <>
      <AppBar style={{ background: "#9146FF" }}>
        <Toolbar>
          <MovieFilterIcon fontSize="large" style={{ paddingRight: "5px" }} />
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Stream Reels
          </Typography>
          <Button variant="contained" disableElevation={true} size="large" startIcon={<PlayArrowIcon />} href="/app" style={{ background: "#F0F0FF", color: "black" }}>
            Watch Now
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default LoginNav;
