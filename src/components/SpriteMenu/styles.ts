import styled from "styled-components"
import { mediaQueries as media } from "utils"

import {
    ChildButton,
    ChildButtonProps,
    FloatingMenu,
    MainButton,
    MainButtonProps
} from "react-floating-button-menu"
import { StyledIconBase } from "@styled-icons/styled-icon"

type MenuButtonProps = MainButtonProps & {
    title: string
}

type MenuButtonOptionProps = ChildButtonProps & {
    title: string
    className?: string
}

export const SpriteMenu = styled(FloatingMenu)`
    position: fixed;
    bottom: 64px;
    right: 48px;
    z-index: 1000;

    ${media.lessThan("mobile")`
        bottom: 32px;
        right: 16px;
    `}
`

export const MenuButton = styled(MainButton)<MenuButtonProps>``

export const MenuButtonOption = styled(ChildButton)<MenuButtonOptionProps>`
    ${StyledIconBase} {
        color: var(--light-color);

        &.active {
            color: var(--primary-color);
        }
    }

    &.disabled {
        cursor: not-allowed;
        background: var(--gray-color);
    }
`
