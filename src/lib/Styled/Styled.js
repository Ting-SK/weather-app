import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // max-width: 800px;
  width: 100vw;
  height: 100vh;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 90px;
  background: #9c8cbb;
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

export const ContentWrapper = styled.section`
  display: flex;
  padding: 10px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  // color: #fafafa;
  color: #000;
  // ${({ theme }) => theme.text};
  background: #9c8cbb;
  // ${({ theme }) => theme.toggleBorder};
  margin-top: 20px;
  width: 285px;
  height: 40px;
`;
export const InputPlace = styled.input`
  width: 280px;
  height: 30px;
  color: #000;
  background: transparent;
  border: none;
  border-bottom: 1px solid gray;
  text-overflow: ellipsis;
  overflow: hidden;
  &:focus {
    box-shadow: 0px 0.2em 2.5em #c4c4c4;
    transform: scale(1.025);
  }
`;

export const WeathTitle = styled.h4`
  font-size: 18px;
  font-weight: normal;
  margin: 30% 0;
`;

export const ResultTitle = styled.h4`
  font-size: 18px;
  font-weight: normal;
  margin: 10px 0;
`;
export const ShowWeatherWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 0;
`;

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #9c8cbb;
  // ${(theme) => theme.headFoot};
  // background: #9c8cbb;
`;

export const ImgAPI = styled.img`
  width: 100px;
`;
