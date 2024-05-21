import styled from "styled-components"
import { mediaQueries as media } from "utils"

export const Container = styled("div")`
    width: 60%;
    margin: auto;

    ${media.lessThan("largeDesktop")`
        width: 70%;
    `}

    ${media.lessThan("desktop")`
        width: 80%;
    `}

    ${media.lessThan("tablet")`
        width: 90%;
    `}
`
