import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const TWITCH_CLIENT_ID = "iqpoubg722gfdtp9trdjs6mpylqxcg";
  const [period, setPeriod] = useState("day");
  const [darkTheme, setDarkTheme] = useState(false);

  return <AppContext.Provider value={{ theme: [darkTheme, setDarkTheme], time: [period, setPeriod], clientId: TWITCH_CLIENT_ID }}>{props.children}</AppContext.Provider>;
};
