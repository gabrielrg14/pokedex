import * as S from "./styles"
import Image from "next/image"
import { formatName, getColorsByType } from "utils"

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
            <S.Type {...getColorsByType(type)}>{formatName(type)}</S.Type>
        </S.Wrapper>
    )
}
