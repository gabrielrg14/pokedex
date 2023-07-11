import styled from "styled-components";

import Link from 'next/link';

export const CardLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: #FFF;
    border-radius: 12px;
    box-shadow: 0px 10px 50px -5px rgb(183 189 193 / 30%);
    border: 1px solid #CCC;
    cursor: pointer;
    transition: all 0.3s;
    animation: fade-in 0.5s;

    :hover {
        -webkit-transform: translateY(1px);
        transform: translateY(1px);
        box-shadow: 0px 10px 50px -5px rgb(0, 0, 0, .5);
    }
`;

export const PokemonInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    margin: 0.5rem auto;
`;

export const PokemonName = styled.h2`
    text-transform: capitalize;
    font-size: 1.3rem;
    margin: 0;
`;