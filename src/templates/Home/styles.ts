import styled from "styled-components"
import { Container as ContainerComponent } from "components"

export const Section = styled.section``

export const Container = styled(ContainerComponent)`
    padding: var(--lg-size) 0;
    animation: fade-in 0.5s ease-in;
    margin: 0 auto;
`
