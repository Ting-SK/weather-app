import React from "react";
import styled from "styled-components";
import { SwitchBtn } from "../../components/SwitchBtn";

export const Header = (props) => {
  let { onButtonClick, city } = props;

  return (
    <HeaderWrapper>
      <SwitchBtn {...props} />
      <ChoosenCity onClick={onButtonClick}>
        {city ? city : "Не выбран"}
      </ChoosenCity>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 90px;
  background: ${({ theme }) => theme.headFoot};
  // background: #9c8cbb;
`;
const ChoosenCity = styled.p`
  // color: #fafafa;
  color: ${({ theme }) => theme.text};

  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
`;
