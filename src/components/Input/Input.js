import React from "react";
import { useAppContext } from "../../core/context";
import { InputPlace } from "../../lib/Styled/Styled";

export const Input = () => {
  let { setValue, value, inputEl } = useAppContext();
  return (
    <InputPlace
      ref={inputEl}
      value={value}
      onChange={(e) => setValue(e.target.value.trim())}
      placeholder="Название города"
    />
  );
};
