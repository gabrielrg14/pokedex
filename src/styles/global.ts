import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: 0;
    }

    html, body, #__next {
        height: 100%;
    }

    body {
        font-family: 'Roboto', Helvetica, sans-serif;
        font-size: 16px;
        color: #212121;
        background-color: #212121;
    }

    ol, ul, li {
        list-style: none;
    }

    img {
        max-width: 100%;
    }

    a {
        color: #fff;
        text-decoration: none;
        cursor: pointer;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0px);
        }
    }
`
