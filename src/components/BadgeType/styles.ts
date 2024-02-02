import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--xs-size);
`

export const Type = styled.span`
    padding: var(--xs-size) var(--md-size);
    color: var(--light-color);
    background-color: var(--dark-color);
    border-radius: 5px;
    text-transform: capitalize;
    font-size: 1.4rem;
`
