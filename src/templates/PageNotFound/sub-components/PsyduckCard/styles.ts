import styled from "styled-components"
import Link from "next/link"

export const CardLink = styled(Link)`
    padding: var(--default-size);
    margin-bottom: var(--default-size);
    background-color: var(--light-color);
    border-radius: 12px;
    box-shadow: 0px 10px 50px -5px rgb(183 189 193 / 30%);
    border: 1px solid var(--gray-color);
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover {
        -webkit-transform: translateY(1px);
        transform: translateY(1px);
        box-shadow: 0px 10px 50px -5px rgb(0, 0, 0, 0.5);
    }
`

export const CardBody = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: var(--xs-size);
    animation: fade-in 0.5s ease-in-out;
`
