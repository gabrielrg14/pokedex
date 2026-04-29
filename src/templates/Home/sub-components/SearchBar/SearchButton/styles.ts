import styled from "styled-components"

export const Button = styled("button")`
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
