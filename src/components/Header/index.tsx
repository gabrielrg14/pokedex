import { useContext } from 'react';

import Image from 'next/image';

import { Sparkles } from "@styled-icons/ionicons-solid/Sparkles"
import { SpriteContext } from "src/common/contexts/sprite";

import { Navbar, Logo, NavList, NavLink, ShinyIcon } from "./styles";

const Header: React.FC = (): JSX.Element => {

    const { sprite, toggleSprite } = useContext(SpriteContext);

    return (
        <header>
            <Navbar>
                <Logo>
                    <NavLink href="/">
                        <Image src="/images/pokedex.png" width={160} height={60} alt="Pokédex logo" />
                    </NavLink>
                </Logo>

                <NavList>
                    <li>
                        <ShinyIcon onClick={() => toggleSprite(sprite === "front_default" ? "front_shiny" : "front_default")}>
                            <Sparkles className={sprite === "front_shiny" ? "shiny" : ""} />
                        </ShinyIcon>
                    </li>
                    <li>
                        <NavLink href="/about">
                            About
                        </NavLink>
                    </li>
                </NavList>
            </Navbar>
        </header>
    )
}

export default Header;