import * as S from "./styles"
import { Stat, Type } from "interfaces"
import { StatBar } from "components"
import { formatName } from "utils"

type PokemonStatsProps = {
    stats: Stat[]
    types: Type[]
}

export const PokemonStats = ({ stats, types }: PokemonStatsProps) => {
    return (
        <S.Wrapper>
            <S.DataTitle>Stats</S.DataTitle>
            {stats?.map((item, index) => (
                <S.Stat key={index}>
                    <S.StatInfo>
                        <span>{formatName(item.stat.name)}</span>
                        <span>{item.base_stat}</span>
                    </S.StatInfo>
                    <StatBar
                        type={types[0].type.name}
                        stat={item.stat.name}
                        baseStat={item.base_stat}
                    />
                </S.Stat>
            ))}
        </S.Wrapper>
    )
}
