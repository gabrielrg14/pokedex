import styled from "styled-components"
import { Container } from "components"
import { mediaQueries as media } from "utils"

export const Background = styled("div")`
    height: 100%;
    padding: var(--default-size) 0;
`

export const Wrapper = styled(Container)`
    height: 100%;
`

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const Card = styled.div`
    padding: var(--lg-size) 8rem;
    background-color: #f7fcfe;
    box-shadow: 0px 10px 50px -5px rgb(183 189 193 / 30%);
    border-radius: 12px;
    border: 2px solid var(--dark-color);
    width: 300px;

    ${media.lessThan("mobile")`
        padding: var(--default-size);
        width: auto;
    `}
`
