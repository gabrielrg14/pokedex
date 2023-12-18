import * as S from "./styles"
import Image from "next/image"
import { Sparkles } from "@styled-icons/ionicons-solid/Sparkles"

import { useStore } from "store"

const Header = () => {
    const { sprite, toggleSprite } = useStore()

    return (
        <header>
            <S.Navbar>
                <S.Logo>
                    <S.NavLink href="/" aria-label="Go to Home">
                        <Image
                            src="/images/pokedex.png"
                            width={160}
                            height={60}
                            alt="Pokédex logo"
                        />
                    </S.NavLink>
                </S.Logo>

                <S.NavList>
                    <li>
                        <S.ShinyIcon onClick={() => toggleSprite()}>
                            <Sparkles
                                className={
                                    sprite === "front_shiny" ? "shiny" : ""
                                }
                            />
                        </S.ShinyIcon>
                    </li>
                    <li>
                        <S.NavLink href="/about" aria-label="Go to About page">
                            About
                        </S.NavLink>
                    </li>
                </S.NavList>
            </S.Navbar>
        </header>
    )
}

export default Header
