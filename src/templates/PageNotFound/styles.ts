import styled from "styled-components"
import { Container as ContainerComponent } from "components"

export const Container = styled(ContainerComponent)``

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: var(--lg-size) 0;
`
