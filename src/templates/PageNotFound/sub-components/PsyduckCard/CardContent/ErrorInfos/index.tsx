import * as S from "./styles"
import { PokemonNumber } from "components"

export const ErrorInfos = () => {
    return (
        <S.Wrapper>
            <PokemonNumber number={404} />
            <S.NotFound>Not Found</S.NotFound>
        </S.Wrapper>
    )
}
