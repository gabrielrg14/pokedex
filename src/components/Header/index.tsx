import { useContext } from "react";

import * as S from "./styles";
import Image from 'next/image';
import { Sparkles } from "@styled-icons/ionicons-solid/Sparkles";

import { SpriteContext } from "common/contexts/sprite";

const Header = () => {
    const { sprite, toggleSprite } = useContext(SpriteContext);

    return (
        <header>
            <S.Navbar>
                <S.Logo>
                    <S.NavLink href="/">
                        <Image src="/images/pokedex.png" width={160} height={60} alt="Pokédex logo" />
                    </S.NavLink>
                </S.Logo>

                <S.NavList>
                    <li>
                        <S.ShinyIcon onClick={() => toggleSprite(sprite === "front_default" ? "front_shiny" : "front_default")}>
                            <Sparkles className={sprite === "front_shiny" ? "shiny" : ""} />
                        </S.ShinyIcon>
                    </li>
                    <li>
                        <S.NavLink href="/about">
                            About
                        </S.NavLink>
                    </li>
                </S.NavList>
            </S.Navbar>
        </header>
    )
}

export default Header;