import Image from 'next/image';

import { Navbar, Logo, NavLink } from "./styles";

const Header: React.FC = (): JSX.Element => {
    return (
        <header>
            <Navbar>
                <Logo>
                    <NavLink href="/">
                        <Image src="/images/pokedex.png" width={150} height={60} alt="Pokédex logo" />
                    </NavLink>
                </Logo>

                <ul>
                    <li>
                        <NavLink href="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </Navbar>
        </header>
    )
}

export default Header;