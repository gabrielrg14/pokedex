import styled from "styled-components"
import Link from "next/link"

export const Footer = styled.footer`
    text-align: center;
    padding: 1rem 0;
    color: #fff;
    font-size: 0.9rem;
`

export const SpanText = styled.span`
    font-family: "Pokemon Solid", sans-serif;
    letter-spacing: 0.1rem;
    line-height: 1.2;
`

export const ApiLink = styled(Link)`
    font-family: "Pokemon Solid", sans-serif;
    color: #fff;
    letter-spacing: 0.1rem;
    line-height: 1.2;
    transition: color 0.3s ease;

    :hover {
        color: #fbc418;
    }
`
