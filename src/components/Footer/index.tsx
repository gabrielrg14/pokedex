import * as S from "./styles"

const Footer = () => {
    return (
        <S.FooterTag>
            <S.SpanText>
                {new Date().getFullYear()} &copy; Powered by{" "}
                <S.ApiLink href="https://pokeapi.co/" target="_blank">
                    PokéAPI
                </S.ApiLink>
            </S.SpanText>
        </S.FooterTag>
    )
}

export default Footer
