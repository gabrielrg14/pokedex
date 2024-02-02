import styled from "styled-components"

export const Button = styled.button`
    cursor: pointer;
    line-height: normal;
    text-align: center;
    font-size: var(--default-size);
    padding: var(--sm-size) 2rem;
    border-radius: 5px;
    color: var(--light-color);
    background-color: var(--secondary-color);
    border: 2px solid var(--primary-color);
    transition: scale 0.3s ease;

    :hover {
        scale: 1.05;
    }
`
