import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [period, setPeriod] = useState("day");

  return <AppContext.Provider value={{ theme: [darkTheme, setDarkTheme], range: [period, setPeriod] }}>{props.children}</AppContext.Provider>;
};
