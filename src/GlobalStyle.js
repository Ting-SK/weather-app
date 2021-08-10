import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {  
	border: none;  
   outline: none;
	}  
 body {
   color: ${({ theme }) => theme.text}; 
   font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
   transition: all 0.50s linear;
   display: flex;
   justify-content: center;
   margin: 0;
   padding: 0;
   list-style: none;
   text-decoration: none;
 }
 a{
   color: #000;
    list-style: none;
    text-decoration: none;
 }
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  // max-width: 800px;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.body};
`;
