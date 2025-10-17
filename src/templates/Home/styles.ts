import styled from "styled-components"
import { mediaQueries as media } from "utils"
import { Container } from "components"

type TypeProps = {
    typeColor: string
}

export const Content = styled.section``

export const TitleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: var(--xl-size);
    background-image: url("/images/bg-title.png");
    background-size: contain;
    background-position: center;
    background-repeat: repeat-x;

    ${media.lessThan("mobile")`
        padding: var(--default-size);
    `}
`

export const Title = styled.h1`
    font-family: "Pokemon Solid", sans-serif;
    letter-spacing: 0.4rem;
    line-height: 1.5;
    text-align: center;
    font-size: 4rem;
    font-weight: bold;
    color: var(--primary-color);
    text-shadow: 3px 3px 3px var(--secondary-color);
    animation: fade-in 0.5s ease-in;

    ${media.lessThan("mobile")`
        font-size: var(--xl-size);
    `}
`

export const Wrapper = styled(Container)`
    padding: var(--lg-size) 0;
    animation: fade-in 0.5s ease-in;
    margin: 0 auto;
`

export const TopArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: var(--sm-size);
`

export const SearchInput = styled("input")`
    flex: 1;
    max-width: 250px;
    padding: var(--sm-size) var(--default-size);
    background-color: rgb(183 189 193 / 30%);
    border: 1px solid var(--gray-color);
    border-radius: 24px;
    font-size: var(--default-size);
    color: #7a7d80;
    outline: none;

    ::-webkit-search-cancel-button {
        -webkit-appearance: none;
        height: 18px;
        width: 18px;
        content: url("https://api.iconify.design/ic:outline-close.svg");
        background-size: contain;
    }
`

export const SearchButton = styled("button")`
    padding: var(--sm-size);
    background-color: rgb(183 189 193 / 30%);
    border: 1px solid var(--gray-color);
    border-radius: 24px;
    transition: background-color 0.3s ease;
    cursor: default;

    :not(:disabled):hover {
        cursor: pointer;
        background-color: rgb(183 189 193 / 60%);
    }
`

export const PokemonCount = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: var(--xs-size);
    margin: var(--lg-size) 0;
`

export const Counter = styled.span`
    font-family: "Pokemon Solid", sans-serif;
    letter-spacing: var(--xs-size);
    line-height: 0;
    font-size: var(--xl-size);
    color: var(--primary-color);
    text-shadow: 2px 2px 1px var(--secondary-color);
    align-self: baseline;
`

export const BottomArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: var(--lg-size);

    ${media.lessThan("tablet")`
        flex-direction: column;
    `}
`

export const TypeList = styled.ul`
    flex: 1;
    position: sticky;
    top: 10px;
    height: fit-content;
    max-width: fit-content;
    background-color: var(--light-color);
    box-shadow: 0px 10px 50px -5px rgb(183 189 193 / 30%);
    border: 1px solid var(--gray-color);
    border-radius: 12px;
    padding: 0 8rem 0 var(--lg-size);

    ${media.lessThan("tablet")`
        position: static;
        max-height: 150px;
        max-width: 100%;
        overflow-y: auto;
        border-radius: 5px;
        padding: 0 var(--default-size);

        ::-webkit-scrollbar {
            height: 10px;
            width: 10px;
        }

        ::-webkit-scrollbar-thumb,
        ::-webkit-scrollbar-thumb:horizontal {
            height: 25%;
            background-color: var(--secondary-color);
            border-radius: 5px;
            border: 2px solid var(--light-color);
        }
    `}
`

export const TypeItem = styled("button")`
    display: flex;
    align-items: center;
    gap: var(--default-size);
    opacity: 0.6;
    border: 0;
    cursor: pointer;
    filter: grayscale(100%);
    background-color: transparent;
    margin: var(--md-size) 0;
    transition: all 0.3s ease-in-out;

    :hover,
    &.selected {
        opacity: 1;
        filter: grayscale(0%);
    }

    ${media.lessThan("tablet")`
        margin: var(--default-size) 0;
    `}
`

export const Type = styled("span")<TypeProps>`
    color: ${(props) => props.typeColor};
    font-size: var(--default-size);
`

export const PokemonCards = styled.div`
    flex: 1;
    text-align: center;
`

export const PokemonList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--lg-size);
    margin-bottom: var(--lg-size);

    ${media.lessThan("desktop")`
        grid-template-columns: repeat(2, 1fr);
    `}

    ${media.lessThan("mobile")`
        grid-template-columns: repeat(1, 1fr);
    `}
`

export const PokemonItem = styled("li")`
    display: contents;
`

export const SearchError = styled.div`
    text-align: center;
`

export const TextNotFound = styled.p`
    font-size: var(--md-size);
    margin-bottom: var(--lg-size);
`
