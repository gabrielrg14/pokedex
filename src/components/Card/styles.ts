import styled from "styled-components"
import Link from "next/link"

export const CardLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: var(--default-size);
    background-color: var(--light-color);
    border-radius: 12px;
    box-shadow: 0px 10px 50px -5px rgb(183 189 193 / 30%);
    border: 1px solid var(--gray-color);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    animation: fade-in 0.5s ease-in;

    :hover {
        -webkit-transform: translateY(1px);
        transform: translateY(1px);
        box-shadow: 0px 10px 50px -5px rgb(0, 0, 0, 0.5);
    }
`

export const PokemonInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: var(--xs-size) auto;
`

export const PokemonName = styled.h2`
    color: var(--dark-color);
    text-transform: capitalize;
    font-size: 2rem;
    margin: 0;
`
