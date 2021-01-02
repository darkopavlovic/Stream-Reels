import { useContext, useEffect } from "react";
import { AppBar, Box, FormControl, FormControlLabel, MenuItem, Select, Switch, Toolbar, Typography } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";
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

  useEffect(() => {
    const data = localStorage.getItem("darkMode");
    if (data === "false") {
      setDarkTheme(false);
    } else {
      setDarkTheme(true);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkTheme);
  });

  return (
    <>
      <AppBar style={darkTheme ? { background: "black" } : { background: "#9146FF" }}>
        <Toolbar>
          <WhatshotIcon style={{ paddingRight: "3px" }} />
          <Typography variant="h6" style={{ paddingRight: "15px" }}>
            Trending
          </Typography>
          <Box style={{ flexGrow: 1 }}>
            <FormControl style={{ paddingRight: "20px" }}>
              <Select value={period} onChange={handleSelect} style={{ color: "white" }}>
                <MenuItem value="day">Today</MenuItem>
                <MenuItem value="week">Week</MenuItem>
                <MenuItem value="month">Month</MenuItem>
                <MenuItem value="all">All Time</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <FormControlLabel control={<Switch checked={darkTheme} onChange={darkMode} />} style={{ marginRight: "0px" }} />
          <Brightness4Icon style={{ marginRight: "15px" }} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default HomeNav;
