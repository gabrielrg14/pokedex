import styled from "styled-components"
import Link from "next/link"
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

export const CardLink = styled(Link)`
    padding: var(--default-size);
    margin-bottom: var(--default-size);
    background-color: var(--light-color);
    border-radius: 12px;
    box-shadow: 0px 10px 50px -5px rgb(183 189 193 / 30%);
    border: 1px solid var(--gray-color);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover {
        -webkit-transform: translateY(1px);
        transform: translateY(1px);
        box-shadow: 0px 10px 50px -5px rgb(0, 0, 0, 0.5);
    }
`

export const CardBody = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: var(--xs-size);
    animation: fade-in 0.5s ease-in-out;
`

export const PsyduckImage = styled(Image)`
    flex: 1;
`

export const CardBottom = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--xs-size);
`

export const ErrorInfos = styled.div``

export const TextNotFound = styled.h2`
    color: var(--dark-color);
    font-size: 2rem;
    margin: 0;
`
