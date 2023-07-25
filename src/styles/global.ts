import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        border: 0;
    }

    body {
        font-family: 'Roboto', Helvetica, sans-serif;
        height: 100%;
        font-size: 16px;
        color: #212121;
    }

    ol, ul, li {
        list-style: none;
    }

    img {
        max-width: 100%;
    }

    a {
        text-decoration: none;
        color: #212121;
    }

    button {
        cursor: pointer;
        border: 0;
    }

    .btn-default {
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        text-align: center;
        font-size: 1rem;
        padding: 0.75rem 1.25rem;
        border-radius: 5px;
        color: #FFF;
        background-color: #3E6CBD;
        border: 2px solid #FBC418;
        transition: all .3s ease;
    }

    .btn-default:hover {
        scale: 1.03;
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

export default GlobalStyle
