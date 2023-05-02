import styled from "styled-components";

interface ChildBarProps {
    completed: number,
    bgColor: string
}

export const ParentBar = styled.div`
    height: 5px;
    width: 100%;
    background-color: rgba(0, 0, 0, .1);
    border-radius: 50px;
`;

export const ChildBar = styled.div<ChildBarProps>`
    height: 100%;
    width: ${props => `${props.completed}%`};
    background-color: ${props => props.bgColor};
    border-radius: inherit;
    text-align: right;
    transition: width 1s ease-in-out;
`;