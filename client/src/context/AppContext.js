import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [period, setPeriod] = useState("day");
  const [page, setPage] = useState(0);
  const [cursor, setCursor] = useState("emptyCursor");

  return <AppContext.Provider value={{ theme: [darkTheme, setDarkTheme], range: [period, setPeriod], count: [page, setPage], pagination: [cursor, setCursor] }}>{props.children}</AppContext.Provider>;
};
