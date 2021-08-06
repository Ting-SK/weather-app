import React, {useContext} from "react";
import styled from "styled-components";
import { SwitchBtn } from "../../components/SwitchBtn";
import {useAppContext} from "../../core/context";

export const Header = (props) => {
  let { onButtonClick } = props;
  
  const appData = useAppContext();
  console.log('apppData', appData);

  let {city} = appData
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
