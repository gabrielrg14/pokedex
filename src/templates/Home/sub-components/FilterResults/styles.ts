import styled from "styled-components"
import { mediaQueries as media } from "utils"

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: var(--lg-size);

    ${media.lessThan("tablet")`
        flex-direction: column;
    `}
`
