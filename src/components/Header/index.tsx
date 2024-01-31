import * as S from "./styles"
import Image from "next/image"
import { Sparkles } from "@styled-icons/ionicons-solid/Sparkles"
import { Container } from "components"
import { useStore } from "store"

export const Header = () => {
    const { sprite, toggleSprite } = useStore()

    return (
        <S.Header>
            <Container>
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
                        <S.NavItem>
                            <S.ShinyIcon onClick={() => toggleSprite()}>
                                <Sparkles
                                    className={
                                        sprite === "front_shiny" ? "shiny" : ""
                                    }
                                />
                            </S.ShinyIcon>
                        </S.NavItem>
                        <S.NavItem>
                            <S.NavLink
                                href="/about"
                                aria-label="Go to About page"
                            >
                                About
                            </S.NavLink>
                        </S.NavItem>
                    </S.NavList>
                </S.Navbar>
            </Container>
        </S.Header>
    )
}
