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

export const TextNotFound = styled.h1`
    font-size: var(--xl-size);
    font-weight: bold;
    margin-bottom: var(--xs-size);
`

export const TextNotHere = styled.h2`
    font-size: 2rem;
    font-weight: 400;
`

export const PsyduckImage = styled(Image)`
    margin: var(--default-size) 0;
    width: auto;
    height: auto;
`
