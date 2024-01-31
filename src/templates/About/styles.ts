import styled from "styled-components"
import Image from "next/image"
import { Container } from "components"

export const Wrapper = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 1.2;
`

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 1rem;
`

export const Description = styled.p`
    max-width: 500px;
    margin: 0 0 1rem;
    line-height: 1.4;
`

export const AboutImage = styled(Image)`
    width: auto;
    height: auto;
`
