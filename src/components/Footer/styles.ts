import styled from "styled-components"
import Link from "next/link"

export const Footer = styled.footer`
    text-align: center;
    padding: var(--default-size) 0;
    color: var(--light-color);
    font-size: 1.4rem;
    line-height: 1;
`

export const SpanText = styled.span`
    font-family: "Pokemon Solid", sans-serif;
    letter-spacing: 0.2rem;
`

export const ApiLink = styled(Link)`
    font-family: "Pokemon Solid", sans-serif;
    color: var(--light-color);
    letter-spacing: 0.2rem;
    transition: color 0.3s ease;

    :hover {
        color: var(--primary-color);
    }
`
