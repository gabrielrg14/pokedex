import styled from "styled-components";
import media from "src/common/utils/mediaQueries";

export const TitleDiv = styled.nav`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 2rem;
    background-image: url("/images/bg-title.png");
    background-size: contain;
    background-position: center;
    background-repeat: repeat-x;

    ${media.lessThan("smallMobile")`
        padding: 1rem;
    `}
`;

export const Title = styled.h1`
    font-family: 'Pokemon Solid', sans-serif;
    letter-spacing: 0.2rem;
    line-height: 1.5;
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: #FBC418;
    text-shadow: 3px 3px 3px #3E6CBD;
    animation: fade-in 0.5s;

    ${media.lessThan("smallMobile")`
        font-size: 2rem;
    `}
`;

export const Container = styled.div`
    padding: 0 10%;
    margin: 2rem auto;
    animation: fade-in 0.5s;
`;

export const SearchDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 120px;
    gap: 1rem;
    margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
    flex: 1;
    max-width: fit-content;
    padding: 10px 20px;
    background-color: rgb(183 189 193 / 30%);
    border-radius: 122px;
    font-size: 1rem;
    color: #7A7D80;
    outline: none;
`;

export const SearchButton = styled.button`
    background-color: rgb(183 189 193 / 30%);
    border: 1px solid #CCC;
    padding: 10px;
    border-radius: 50%;
    transition: background-color 0.3s;
    cursor: default;

    :not(:disabled):hover {
        cursor: pointer;
        background-color: rgb(183 189 193 / 60%);
    }
`;

export const PokemonList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
    margin-bottom: 2rem;

    ${media.lessThan("desktop")`
        grid-template-columns: repeat(3, 1fr);
    `}

    ${media.lessThan("tablet")`
        grid-template-columns: repeat(2, 1fr);
    `}

    ${media.lessThan("mobile")`
        grid-template-columns: repeat(1, 1fr);
    `}
`;

export const BottomButton = styled.div`
    text-align: center;
`;

export const SearchError = styled.p`
    font-size: 1.1rem;
    margin-bottom: 1rem;
`;