import * as S from "./styles"

export const Footer = () => {
    return (
        <S.FooterTag>
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
        </S.FooterTag>
    )
}
