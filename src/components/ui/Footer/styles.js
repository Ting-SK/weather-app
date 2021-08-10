import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  background: ${({theme})=>theme.headFoot};
`;

export const ImgAPI = styled.img`
  width: 100px;
`;
