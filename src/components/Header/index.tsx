import * as S from "./styles"
import Image from "next/image"
import { Images } from "@styled-icons/entypo/Images"
import { Repeat, Sparkles } from "@styled-icons/ionicons-solid"
import { Container } from "components"
import {
    SpritePosition,
    SpriteType,
    SpriteVersion,
    useSpriteMenuStore
} from "store"

export const Header = () => {
    const {
        sprite,
        toggleSpriteVersion,
        toggleSpritePosition,
        toggleSpriteType
    } = useSpriteMenuStore()

    return (
        <S.Header>
            <Container>
                <S.Navbar>
                    <S.NavLogo>
                        <S.NavLink href="/" aria-label="Go to Home">
                            <Image
                                src="/images/pokedex.png"
                                width={160}
                                height={60}
                                alt="Pokédex logo"
                                priority
                            />
                        </S.NavLink>
                    </S.NavLogo>

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
                                title="Toggle rotation"
                                onClick={() => toggleSpritePosition()}
                                disabled={
                                    sprite.version !== SpriteVersion.pixelated
                                }
                            >
                                <Repeat
                                    className={
                                        sprite.position === SpritePosition.back
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
