import styled from "styled-components"
import { mediaQueries as media } from "utils"

export const Wrapper = styled.div`
    padding: 0 var(--default-size);
    margin: var(--default-size) 0 0;
`

export const DataTitle = styled.h2`
    font-size: var(--default-size);
    margin-bottom: 0.4rem;
    text-align: center;
`

export const Stat = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--xs-size);
    margin: 0 0 0.4rem;

    ${media.lessThan("mobile")`
        flex-direction: column;
        gap: 0.4rem;
        margin: 0 0 var(--default-size);
    `}
`

export const StatInfo = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--xs-size);
    width: 100%;
`
