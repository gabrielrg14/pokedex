import styled from "styled-components"

export const Button = styled.button`
    cursor: pointer;
    line-height: normal;
    text-align: center;
    font-size: 1rem;
    padding: 0.75rem 1.25rem;
    border-radius: 5px;
    color: #fff;
    background-color: #3e6cbd;
    border: 2px solid #fbc418;
    transition: scale 0.3s ease;

    :hover {
        scale: 1.05;
    }
`
