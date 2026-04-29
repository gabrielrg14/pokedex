import styled from "styled-components"
import { mediaQueries as media } from "utils"

type TypeProps = {
    typeColor: string
}

export const List = styled.ul`
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

export const Item = styled("button")`
    display: flex;
    align-items: center;
    gap: var(--default-size);
    opacity: 0.6;
    border: 0;
    cursor: pointer;
    filter: grayscale(100%);
    background-color: transparent;
    margin: var(--default-size) 0;
    transition: all 0.3s ease-in-out;

    :hover,
    &.selected {
        opacity: 1;
        filter: grayscale(0%);
    }
`

export const Type = styled("span")<TypeProps>`
    color: ${(props) => props.typeColor};
    font-size: var(--default-size);
`
