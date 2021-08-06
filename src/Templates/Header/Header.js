import styled from "styled-components";
import { SwitchBtn } from "../../components/SwitchBtn";
import { useAppContext } from "../../core/context";

export const Header = (props) => {
  let { city, inputEl } = useAppContext();
  const onFocus = () => {
    inputEl.current.focus();
  };
  return (
    <HeaderWrapper>
      <SwitchBtn {...props} />
      <ChoosenCity onClick={onFocus}>{city} </ChoosenCity>
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
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  text-decoration: underline;
  overflow: hidden;
  width: 100px;
  text-overflow: ellipsis;
  cursor: pointer;
`;
