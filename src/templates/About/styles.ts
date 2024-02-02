import styled from "styled-components"
import Image from "next/image"
import { Container } from "components"

export const Wrapper = styled(Container)``

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: var(--lg-size) 0;
`

export const Title = styled.h1`
    font-size: var(--xl-size);
    margin-bottom: var(--default-size);
`

export const Description = styled.p`
    max-width: 60rem;
    font-size: var(--md-size);
    margin: 0 0 var(--default-size);
    line-height: var(--lg-size);
`

export const AboutImage = styled(Image)`
    width: auto;
    height: auto;
`
