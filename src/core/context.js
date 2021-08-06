import React, { createContext, useContext, useRef, useState } from "react";

const AppContext = createContext({});

export const AppProvider = (props) => {
  const [city, setCity] = useState("");
  const [value, setValue] = useState("");
  const inputEl = useRef(null);

  let values = { city, setCity, value, setValue, inputEl };

  return (
    <AppContext.Provider value={values}>{props.children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
