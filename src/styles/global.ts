import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    ol, ul {
        list-style: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        border: none;
        outline: none;
        background: none;
    }
    body {
        -webkit-font-smothing: antialiased;
        -moz-osx-font-smothing: grayscale;
        background-color: #F6D8AE;
        ::-webkit-scrollbar {
        }
        ::-webkit-scrollbar-track {
        }
        ::-webkit-scrollbar-thumb {
        }
        font-family: 'Roboto', sans-serif;
    }

    #root {
        max-width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
    }
`;
