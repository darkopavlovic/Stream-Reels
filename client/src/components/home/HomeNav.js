import { useContext } from "react";
import { AppBar, FormControl, FormControlLabel, MenuItem, Select, Switch, Toolbar, Typography } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { AppContext } from "../../context/AppContext";

function HomeNav() {
  const { theme, range, count, pagination } = useContext(AppContext);
  const [darkTheme, setDarkTheme] = theme;
  const [period, setPeriod] = range;
  const [page, setPage] = count;
  const [cursor, setCursor] = pagination;

  // Handle event for dark mode
  const darkMode = () => {
    setDarkTheme(!darkTheme);
  };

  // Handle event for select
  const handleSelect = (e) => {
    setPeriod(e.target.value);
    setPage(0);
    setCursor("emptyCursor");
  };

  return (
    <>
      <AppBar style={darkTheme ? { background: "black" } : { background: "#9146FF" }}>
        <Toolbar>
          <MovieFilterIcon fontSize="large" style={{ paddingRight: "5px" }} />
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Stream Reels
          </Typography>
          <WhatshotIcon style={{ paddingRight: "3px" }} />
          <Typography variant="h6" style={{ paddingRight: "15px" }}>
            Trending
          </Typography>
          <FormControl style={{ paddingRight: "20px" }}>
            <Select value={period} onChange={handleSelect} style={{ color: "white" }}>
              <MenuItem value="day">Today</MenuItem>
              <MenuItem value="week">Week</MenuItem>
              <MenuItem value="month">Month</MenuItem>
              <MenuItem value="all">All Time</MenuItem>
            </Select>
          </FormControl>
          <FormControlLabel control={<Switch checked={darkTheme} onChange={darkMode} />} style={{ marginRight: "0px" }} />
          <Brightness4Icon style={{ marginRight: "15px" }} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default HomeNav;
