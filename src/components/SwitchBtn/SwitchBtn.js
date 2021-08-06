import React from "./index";
import "./SwitchBtn.css";

export const SwitchBtn = ({ themeToggler, theme }) => {
  return (
    <label class="switch">
      <input type="checkbox" value={theme} onClick={themeToggler} />
      <span class="slider round"></span>
    </label>
  );
};
