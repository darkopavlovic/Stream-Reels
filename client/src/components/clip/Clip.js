import { useContext, useState } from "react";
import { Avatar, Box, ButtonGroup, Card, CardHeader, CardMedia, IconButton, Link, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import ShareIcon from "@material-ui/icons/Share";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { AppContext } from "../../context/AppContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

// Renders clip card
function Clip({ clip }) {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(AppContext);
  const [darkTheme] = theme;

  // Handle share button
  const shareButton = () => {
    setOpen(true);
  };

  // Close Alert
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      setOpen(false);
    }
    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <>
      <Card raised={true} style={darkTheme ? { background: "black", color: "white", marginTop: "20px" } : { background: "white", marginTop: "20px" }}>
        <CardHeader
          avatar={
            <Link href={clip.broadcaster.channel_url} target="_blank" rel="noopener noreferrer">
              <Avatar src={clip.broadcaster.logo} />
            </Link>
          }
          title={clip.title}
          subheader={
            <Box style={darkTheme ? { color: "white" } : { color: "black" }}>
              {clip.broadcaster.display_name} | {clip.game} | {clip.views} views
            </Box>
          }
          action={
            <ButtonGroup variant="text">
              <IconButton onClick={shareButton}>
                <CopyToClipboard text={`https://clips.twitch.tv/${clip.slug}`}>
                  <ShareIcon style={darkTheme ? { color: "white" } : { color: "black" }} />
                </CopyToClipboard>
              </IconButton>
              <IconButton>
                <Link href={clip.broadcaster.channel_url} target="_blank" rel="noopener noreferrer">
                  <PersonAddIcon style={darkTheme ? { color: "white" } : { color: "black" }} />
                </Link>
              </IconButton>
            </ButtonGroup>
          }
        />
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={open}
          autoHideDuration={5000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="success">
            Copied To Clipboard
          </Alert>
        </Snackbar>
        <CardMedia>
          <video width="100%" controls loop preload="none" poster={clip.thumbnails.medium} style={{ outline: "none" }}>
            <source src={clip.thumbnails.tiny.replace("-preview-86x45.jpg", ".mp4")} type="video/mp4" />
          </video>
        </CardMedia>
      </Card>
    </>
  );
}

export default Clip;
