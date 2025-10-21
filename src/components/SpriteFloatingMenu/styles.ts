import styled from "styled-components"
import { mediaQueries as media } from "utils"

import { StyledIconBase } from "@styled-icons/styled-icon"

type MenuOpenProp = {
    isOpen: boolean
}

export const FloatingMenu = styled("div")`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 64px;
    right: 64px;
    z-index: 1000;

    ${media.lessThan("desktop")`
        bottom: 64px;
        right: 32px;
    `}

    ${media.lessThan("tablet")`
        bottom: 32px;
        right: 16px;
    `}
`

export const MainButton = styled("button")`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--dark-color);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    box-shadow:
        0 0 4px rgba(0, 0, 0, 0.14),
        0 4px 8px rgba(0, 0, 0, 0.28);
    cursor: pointer;
`

export const MainButtonIcon = styled("div")<MenuOpenProp>`
    transition: transform 300ms;
    transform: ${(props) => `rotate(${props.isOpen ? 180 : 0}deg)`};
`

export const MenuButton = styled("button")<MenuOpenProp>`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${(props) => `${props.isOpen ? 1 : 0}`};
    background-color: var(--dark-color);
    width: 48px;
    height: ${(props) => `${props.isOpen ? "48px" : "0px"}`};
    margin-bottom: ${(props) => `${props.isOpen ? "10px" : "0px"}`};
    border-radius: 50%;
    box-shadow:
        0 0 4px rgba(0, 0, 0, 0.14),
        0 4px 8px rgba(0, 0, 0, 0.28);
    cursor: pointer;
    pointer-events: ${(props) => `${props.isOpen ? "auto" : "none"}`};
    transition: all 500ms;
    transform: ${(props) => `translate(0px, ${props.isOpen ? 0 : 32}px)`};

    &.disabled {
        cursor: not-allowed;
        background-color: var(--gray-color);
    }

    ${StyledIconBase} {
        color: var(--light-color);

        &.active {
            color: var(--primary-color);
        }
    }
`
