import styled from "styled-components"
import Link from "next/link"

export const FooterTag = styled.footer`
    text-align: center;
    padding: 1.5rem 10%;
    background-color: #212121;
    color: #fff;
    font-size: 0.9rem;
    border-top: 4px solid #111;
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
    transition: color 0.3s;

    :hover {
        color: #fbc418;
    }
`
