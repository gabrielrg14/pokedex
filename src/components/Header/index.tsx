import * as S from "./styles"
import Image from "next/image"
import { Images } from "@styled-icons/entypo/Images"
import { Sparkles } from "@styled-icons/ionicons-solid/Sparkles"
import { Container } from "components"
import { SpriteType, SpriteVersion, useStore } from "store"

export const Header = () => {
    const { sprite, toggleSpriteVersion, toggleSpriteType } = useStore()

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
                            <S.NavIcon
                                title="Toggle sprite"
                                onClick={() => toggleSpriteVersion()}
                            >
                                <Images
                                    className={
                                        sprite.version ===
                                        SpriteVersion.pixelated
                                            ? "active"
                                            : ""
                                    }
                                />
                            </S.NavIcon>
                        </S.NavItem>
                        <S.NavItem>
                            <S.NavIcon
                                title="Toggle shiny"
                                onClick={() => toggleSpriteType()}
                            >
                                <Sparkles
                                    className={
                                        sprite.type === SpriteType.shiny
                                            ? "active"
                                            : ""
                                    }
                                />
                            </S.NavIcon>
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
