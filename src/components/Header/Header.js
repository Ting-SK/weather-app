import React from 'react'
import { ThemeToggler } from '../../containers/ThemeToggler';
import { useAppContext } from "../../core/context";
import { ChoosenCity, HeaderWrapper } from "../../lib/Styled/Styled";

export const Header = () => {
  let { city } = useAppContext();
  return (
    <HeaderWrapper>
      <ThemeToggler />
      <ChoosenCity>{city} </ChoosenCity>
    </HeaderWrapper>
  );
};

