import { useState } from "react";
import React from "./index";
import "./SwitchBtn.css";

export const SwitchBtn = ({ onCheck, check }) => {
  return (
    <label class="switch">
      <input type="checkbox" value={check} onClick={onCheck} />
      <span class="slider round"></span>
    </label>
  );
};
