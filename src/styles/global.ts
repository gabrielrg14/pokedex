import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #fbc418;
        --secondary-color: #3e6cbd;
        --dark-color: #161817;
        --light-color: #fff;
        --gray-color: #ccc;

        --xs-size: 0.8rem;
        --sm-size: 1.2rem;
        --default-size: 1.6rem;
        --md-size: 1.8rem;
        --lg-size: 2.4rem;
        --xl-size: 3.2rem;
    }

    * {
        padding: 0;
        margin: 0;
        border: 0;
    }

    html, body, #__next {
        height: 100%;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', Helvetica, sans-serif;
        font-size: var(--default-size);
        color: var(--dark-color);
        background-color: var(--dark-color);
    }

    ol, ul, li {
        list-style: none;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }

    a {
        color: var(--light-color);
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
