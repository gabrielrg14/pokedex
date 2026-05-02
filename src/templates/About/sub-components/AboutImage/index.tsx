import * as S from "./styles"

export const AboutImage = () => {
    return (
        <S.Image
            src="/images/about.png"
            width={250}
            height={200}
            alt="Pokémon thinking"
            priority
        />
    )
}
