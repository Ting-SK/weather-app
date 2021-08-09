import React, { createContext, useContext, useState } from "react";
import { lightTheme } from "../lib/Theme/Theme";
const AppContext = createContext({});

export const AppProvider = (props) => {
  const [city, setCity] = useState("");
  const [value, setValue] = useState("");
  const [theme, setTheme] = useState(lightTheme);

  let values = { city, setCity, value, setValue, theme, setTheme };

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
