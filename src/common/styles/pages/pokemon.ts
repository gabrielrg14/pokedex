import styled from "styled-components";
import media from "src/common/utils/mediaQueries";

import Image from 'next/image';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: inherit;
`;

export const PokemonCard = styled.div`
    margin: 1rem;
    padding: 1.5rem 5rem;
    background-color: #F2F2F2;
    box-shadow: 0px 10px 50px -5px rgb(183 189 193 / 30%);
    border-radius: 12px;
    border: 2px solid #212121;

    ${media.lessThan("tablet")`
        padding: 1.5rem 3rem;
    `}

    ${media.lessThan("smallMobile")`
        padding: 1rem 1rem;
    `}
`;

export const PokemonTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PokemonName = styled.h1`
    font-size: 2rem;
    text-transform: capitalize;
    text-align: center;
`;

export const SpanNumber = styled.span``;

export const DivImage = styled.div`
    text-align: center;
`;

export const PokemonImage = styled(Image)`
    width: auto;
    height: auto;
`;

export const PokemonData = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    flex-wrap: wrap;
    text-align: center;
`;

export const DivData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 0;
    padding: 0 1rem;
    text-transform: capitalize;
`;

export const DataTitle = styled.h4`
    font-size: 1rem;
    margin-bottom: 0.3rem;
    text-align: center;
`;
    
export const PokemonStats = styled.div`
    padding: 0 1rem;
    margin: 1rem 0 0;
    text-transform: capitalize;
`;

export const Stat = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    margin: 0 0 0.2rem;

    ${media.lessThan("mobile")`
        flex-direction: column;
        flex-wrap: wrap;
        gap: 0.2rem;
        margin: 0 0 1rem;
    `}
`;

export const StatInfo = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
`;