import styled from "styled-components"
import { mediaQueries as media } from "utils"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: var(--xl-size);
    background-image: url("/images/bg-title.png");
    background-size: contain;
    background-position: center;
    background-repeat: repeat-x;

    ${media.lessThan("mobile")`
        padding: var(--default-size);
    `}
`

export const Title = styled.h1`
    font-family: "Pokemon Solid", sans-serif;
    letter-spacing: 0.4rem;
    line-height: 1.5;
    text-align: center;
    font-size: 4rem;
    font-weight: bold;
    color: var(--primary-color);
    text-shadow: 3px 3px 3px var(--secondary-color);
    animation: fade-in 0.5s ease-in;

    ${media.lessThan("mobile")`
        font-size: var(--xl-size);
    `}
`
