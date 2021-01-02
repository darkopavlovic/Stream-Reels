import { Box, Link, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

function LoginFooter() {
  return (
    <>
      <Box style={{ background: "black", color: "white", textAlign: "center", paddingTop: "25px", paddingBottom: "25px" }}>
        <Typography>View the source code on GitHub</Typography>
        <Link href="https://github.com/darkopavlovic/Stream-Reels" target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="large" style={{ paddingTop: "5px", color: "white" }} />
        </Link>
      </Box>
    </>
  );
}

export default LoginFooter;
