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

export const TextNotFound = styled.h1`
    font-size: 2rem;
    margin-bottom: 0.2rem;
`

export const TextNotHere = styled.h2`
    font-size: 1.1rem;
    font-weight: normal;
`

export const PsyduckImage = styled(Image)`
    margin: 1rem 0;
    width: auto;
    height: auto;
`
