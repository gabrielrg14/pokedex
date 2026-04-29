import styled from "styled-components"
import { mediaQueries as media } from "utils"

export const Wrapper = styled.div`
    flex: 1;
    text-align: center;
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--lg-size);
    margin-bottom: var(--lg-size);

    ${media.lessThan("desktop")`
        grid-template-columns: repeat(2, 1fr);
    `}

    ${media.lessThan("mobile")`
        grid-template-columns: repeat(1, 1fr);
    `}
`

export const Item = styled("li")`
    display: contents;
`
