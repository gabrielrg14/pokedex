import styled from "styled-components";
import media from "src/common/utils/mediaQueries";

interface TypeProps {
    typeColor: string
}

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
    padding: 0px 20%;
    margin: 1.5rem auto;
    animation: fade-in 0.5s;

    ${media.lessThan("desktop")`
        padding: 0px 10%;
    `}
`;

export const TopArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-radius: 120px;
    gap: 1rem;
`;

export const SearchInput = styled.input`
    flex: 1;
    max-width: fit-content;
    padding: 10px 20px;
    background-color: rgb(183 189 193 / 30%);
    border: 1px solid #CCC;
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

export const PokemonCount = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 0.5rem;
    margin: 1.5rem 0;
`;

export const Counter = styled.span`
    font-family: 'Pokemon Solid', sans-serif;
    letter-spacing: 0.5rem;
    line-height: 0;
    font-size: 2rem;
    color: #FBC418;
    text-shadow: 2px 2px 1px #3E6CBD;
    align-self: baseline;
`;

export const BottomArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 1.5rem;

    ${media.lessThan("tablet")`
        flex-direction: column;
    `}
`;

export const TypeList = styled.ul`
    flex: 1;
    height: fit-content;
    max-width: fit-content;
    background-color: #FFF;
    box-shadow: 0px 10px 50px -5px rgb(183 189 193 / 30%);
    border: 1px solid #CCC;
    border-radius: 12px;
    padding: 0 5rem 0 1.5rem;

    ${media.lessThan("tablet")`
        max-height: 150px;
        max-width: 100%;
        overflow-y: auto;
        border-radius: 5px;
        padding: 0 1rem;

        ::-webkit-scrollbar {
            height: 10px;
            width: 10px;
        }
    
        ::-webkit-scrollbar-thumb,
        ::-webkit-scrollbar-thumb:horizontal {
            height: 25%;
            background-color: #3E6CBD;
            border-radius: 5px;
            border: 2px solid #FFF;
        }
    `}
`;

export const TypeItem = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    opacity: 0.6;
    border: 0;
    cursor: pointer;
    filter: grayscale(100%);
    background-color: transparent;
    margin: 1.5rem 0;
    transition: all 0.3s;

    :hover,
    &.selected {
        opacity: 1;
        filter: grayscale(0%);
    }

    ${media.lessThan("tablet")`
        margin: 1rem 0;
    `}
`;

export const Type = styled.span<TypeProps>`
    color: ${props => props.typeColor};
    text-transform: capitalize;
    font-size: 1rem;
`;

export const PokemonList = styled.div`
    flex: 1;
    text-align: center;
`;

export const PokemonCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;

    ${media.lessThan("desktop")`
        grid-template-columns: repeat(2, 1fr);
    `}

    ${media.lessThan("mobile")`
        grid-template-columns: repeat(1, 1fr);
    `}
`;

export const SearchError = styled.div`
    text-align: center;
`;

export const TextNotFound = styled.p`
    font-size: 1.1rem;
`;

export const ButtonLoad = styled.button`
    margin-top: 1.5rem;
`;