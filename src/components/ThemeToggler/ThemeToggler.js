import React from "react";
import Switch from "@material-ui/core/Switch";
import { useAppContext } from "../../core/context";
import { darkTheme, lightTheme } from "../../lib/theme/Theme";

export const ThemeToggler = () => {
  const { theme, setTheme } = useAppContext();

  const handleChange = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  };

  return (
    <Switch
      value={theme}
      onClick={handleChange}
      color="primary"
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
};
