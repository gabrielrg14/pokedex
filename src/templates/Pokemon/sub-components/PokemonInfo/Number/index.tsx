import * as S from "./styles"
import { PokemonNumber } from "components"

type NumberProps = {
    number: number
}

export const Number = ({ number }: NumberProps) => {
    return (
        <S.Number>
            <PokemonNumber number={number} />
        </S.Number>
    )
}
