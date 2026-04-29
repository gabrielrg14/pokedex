import styled from "styled-components"

export const Input = styled("input")`
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
