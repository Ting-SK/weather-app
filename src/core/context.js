import React, { createContext, useContext, useState } from "react";

const defaultValue = {
  city: "",
};

const AppContext = createContext({});

export const AppProvider = (props) => {
  const [city, setCity] = useState("testCity");
  return (
    <AppContext.Provider value={{ city, setCity }}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);