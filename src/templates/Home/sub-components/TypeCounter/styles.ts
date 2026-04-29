import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: var(--xs-size);
    margin: var(--lg-size) 0;
`

export const Counter = styled.span`
    font-family: "Pokemon Solid", sans-serif;
    letter-spacing: var(--xs-size);
    line-height: 0;
    font-size: var(--xl-size);
    color: var(--primary-color);
    text-shadow: 2px 2px 1px var(--secondary-color);
    align-self: baseline;
`
