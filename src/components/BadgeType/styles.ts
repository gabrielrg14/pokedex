import styled from "styled-components"

type TypeProps = {
    background: string
    backgroundColor: string
    color: string
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--xs-size);
`

export const Type = styled.span<TypeProps>`
    padding: var(--xs-size) var(--md-size);
    background: ${(props) => props.background};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    border-radius: 5px;
    font-size: 1.4rem;
`
