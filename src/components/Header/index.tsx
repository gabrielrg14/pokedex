import * as S from "./styles"
import Image from "next/image"
import { Container } from "components"

export const Header = () => {
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
