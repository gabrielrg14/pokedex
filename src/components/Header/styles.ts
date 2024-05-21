import styled from "styled-components"
import { mediaQueries as media } from "utils"

import Link from "next/link"
import { StyledIconBase } from "@styled-icons/styled-icon"

export const Header = styled.header``

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--default-size);
    padding: var(--default-size) 0;
    font-size: var(--md-size);

    ${media.lessThan("mobile")`
        flex-direction: column;
    `}
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--lg-size);
`

export const NavItem = styled("li")``

export const NavLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    transition: border 0.3s ease;
    line-height: var(--lg-size);
    border-bottom: 2px solid transparent;

    :hover {
        border-color: var(--primary-color);
    }
`

export const ShinyIcon = styled("div")`
    ${StyledIconBase} {
        cursor: pointer;
        color: var(--light-color);
        width: var(--lg-size);

        &.shiny {
            color: var(--primary-color);
        }

        /* https://codepen.io/amit_merchant/pen/wvxGjpG */
        mask-image: linear-gradient(
            45deg,
            #000 25%,
            rgba(0, 0, 0, 0.2) 50%,
            #000 75%
        );
        mask-size: 800%;
        mask-position: 0;

        :hover {
            transition: -webkit-mask-position 2s ease;
            mask-position: 120%;
            opacity: 1;
        }
    }
`
