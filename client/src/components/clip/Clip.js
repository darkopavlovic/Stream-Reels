import { useContext, useState } from "react";
import { Avatar, ButtonGroup, Card, CardMedia, CardHeader, IconButton, Link, Snackbar } from "@material-ui/core";
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
  var videoUrl = null;

  // Handle share button
  const shareButton = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
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
          avatar={<Avatar src={clip.broadcaster.logo} />}
          title={clip.title}
          subheader={`${clip.broadcaster.display_name} | ${clip.game} | ${clip.views} views`}
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
          <video width="100%" controls loop style={{ outline: "none" }}>
            {(videoUrl = clip.thumbnails.tiny)}
            <source src={videoUrl.replace("-preview-86x45.jpg", ".mp4")} type="video/mp4" />
          </video>
        </CardMedia>
      </Card>
    </>
  );
}

export default Clip;
