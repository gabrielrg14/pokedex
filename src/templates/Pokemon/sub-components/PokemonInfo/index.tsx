import * as S from "./styles"
import { Cries, Genera as IGenera } from "interfaces"
import { Title } from "./Title"
import { Genera } from "./Genera"
import { Number } from "./Number"

export type PokemonInfoProps = {
    name: string
    number: number
    cries: Cries
    genera?: IGenera[]
}

export const PokemonInfo = ({
    name,
    number,
    cries,
    genera
}: PokemonInfoProps) => {
    return (
        <S.Wrapper>
            <Title name={name} cries={cries} />
            <Genera genera={genera} />
            <Number number={number} />
        </S.Wrapper>
    )
}
