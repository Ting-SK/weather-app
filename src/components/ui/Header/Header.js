import React from 'react'
import { ThemeToggler } from '../../ThemeToggler';
import { useAppContext } from "../../../core/context";
import { ChoosenCity, HeaderWrapper } from "./styles";

export const Header = () => {
  let { city } = useAppContext();
  return (
    <HeaderWrapper>
      <ThemeToggler />
      <ChoosenCity>{city} </ChoosenCity>
    </HeaderWrapper>
  );
};

