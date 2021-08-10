import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 90px;
  background: ${({theme})=>theme.headFoot};
`;

export const ChoosenCity = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  text-decoration: underline;
  overflow: hidden;
  width: 100px;
  text-overflow: ellipsis;
  cursor: pointer;
`;
