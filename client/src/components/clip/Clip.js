import { useContext } from "react";
import { Avatar, Card, CardMedia, CardHeader, ButtonGroup, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { AppContext } from "../../context/AppContext";
import "./Clip.css";

// Renders clip card
function Clip({ clip }) {
  const { theme } = useContext(AppContext);
  const [darkTheme] = theme;

  return (
    <>
      <Card raised={true} style={darkTheme ? { background: "black", color: "white" } : { background: "white", color: "black" }}>
        <CardHeader
          avatar={<Avatar src={clip.broadcaster.logo} />}
          title={clip.title}
          action={
            <ButtonGroup variant="text" color="inherit" aria-label="text primary button group">
              <IconButton>
                <PersonAddIcon />
              </IconButton>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
            </ButtonGroup>
          }
        />
        <CardMedia>
          <div className="iframeDiv">
            <iframe title={clip.slug} src={`https://clips.twitch.tv/embed?clip=${clip.slug}&parent=localhost`} frameBorder="0" allowFullScreen={true} scrolling="no" height="331" width="98%"></iframe>
          </div>
        </CardMedia>
      </Card>
    </>
  );
}

export default Clip;
