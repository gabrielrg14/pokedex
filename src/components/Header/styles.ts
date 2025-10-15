import styled from "styled-components"
import { mediaQueries as media } from "utils"

import Link from "next/link"

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

export const NavLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

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

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--lg-size);
`

export const NavItem = styled("li")``
