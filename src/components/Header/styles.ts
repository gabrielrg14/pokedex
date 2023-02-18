import styled from "styled-components";
import media from "src/utils/mediaQueries";

import Link from 'next/link';

export const Navbar = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem 10%;
    font-size: 1.1rem;
    background-color: #212121;
    color: #FFF;
    border-bottom: 4px solid #111;

    ${media.lessThan("smallMobile")`
        flex-direction: column;
        padding: 1rem 10%;
    `}
`;

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavLink = styled(Link)`
    line-height: 1.5;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: #FFF;
    text-decoration: none;
    transition: .4s;
    border-bottom: 2px solid transparent;
    
    :hover {
        border-color: #FBC418;
    }
`;