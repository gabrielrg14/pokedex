import * as S from "./styles"
import Image from "next/image"
import { getColorsByPokemonType } from "utils"

type BadgeTypeProps = {
    type: string
}

export const BadgeType = ({ type }: BadgeTypeProps) => {
    return (
        <S.Wrapper>
            <Image
                src={`/images/types/${type}.svg`}
                width={32}
                height={32}
                alt={`Type ${type}`}
            />
            <S.Type {...getColorsByPokemonType(type)}>{type}</S.Type>
        </S.Wrapper>
    )
}
