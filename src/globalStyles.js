import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
 }

 html, body {
   overflow-x: hidden;
   background: #979797;
 }
`;
export default GlobalStyle;
