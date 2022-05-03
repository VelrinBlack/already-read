import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body, #__next {
        height: 100%;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
    }
`;

export default GlobalStyle;
