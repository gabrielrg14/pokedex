import * as S from "./styles"
import { Container } from "components"

export const Footer = () => {
    return (
        <S.Footer>
            <Container>
                <S.SpanText>
                    {new Date().getFullYear()} &copy; Powered by{" "}
                    <S.ApiLink
                        href="https://pokeapi.co/"
                        aria-label="Go to the PokéAPI"
                        target="_blank"
                    >
                        PokéAPI
                    </S.ApiLink>
                </S.SpanText>
            </Container>
        </S.Footer>
    )
}
