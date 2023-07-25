import * as S from "./styles"

type PokemonNumberProps = {
    number: number | null | undefined
}

const PokemonNumber = ({ number }: PokemonNumberProps) => {
    function formatPokemonNumber(
        number: number | null | undefined,
        quantity: number
    ): string {
        let numberWithZeros = String(number)
        let counter = numberWithZeros.length

        while (counter < quantity) {
            numberWithZeros = "0" + numberWithZeros
            counter++
        }

        return numberWithZeros
    }

    return (
        <S.SpanNumber>
            #{formatPokemonNumber(number, String(number).length >= 5 ? 5 : 4)}
        </S.SpanNumber>
    )
}

export default PokemonNumber
