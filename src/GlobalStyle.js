import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
* {  
	border: none;  
   outline: none;
	}  
 body {
   background: ${({ theme }) => theme.body};
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
   color: ${({ theme }) => theme.text};
    list-style: none;
    text-decoration: none;
 }
`;
