import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {  
	border: none;  
   outline: none;
	}  
 body {
   background: #FFF;
   color: #000; 
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
