import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body{
        font-family: 'Poppins', sans-serif;
        font-family: "Goldman", serif;
        overflow: hidden;
    }

    html{
        overflow-x: hidden;
    }
`;
