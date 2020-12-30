import { useState, useContext } from "react";
import { AppBar, Avatar, Button, FormControlLabel, Menu, MenuItem, Switch, Toolbar, Typography } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import { AppContext } from "../../context/AppContext";

function HomeNav() {
  const [anchor, setAnchor] = useState(null);
  const { theme } = useContext(AppContext);
  const [darkTheme, setDarkTheme] = theme;

  // Handle event for opening menu
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };

  // Handle event for closing menu
  const handleClose = () => {
    setAnchor(null);
  };

  // Handle event for dark mode
  const darkMode = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <>
      <AppBar style={darkTheme ? { background: "black" } : { background: "#9146FF" }}>
        <Toolbar>
          <MovieFilterIcon fontSize="large" style={{ paddingRight: "5px" }} />
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Stream Reels
          </Typography>
          <FormControlLabel control={<Switch checked={darkTheme} onChange={darkMode} />} style={{ marginRight: "0px" }} />
          <Brightness4Icon style={{ marginRight: "15px" }} />
          <Button onClick={handleMenu}>
            <Avatar alt="LegendOfDarko" src="https://static-cdn.jtvnw.net/jtv_user_pictures/48d5b0b5-fe5f-4cc5-95f9-ccf981bb00fd-profile_image-300x300.png" />
          </Button>
          <Menu
            anchor={anchor}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchor)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default HomeNav;
