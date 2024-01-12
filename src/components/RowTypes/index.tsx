import * as S from "./styles"
import { IPokemonType } from "interfaces"
import { BadgeType } from "components"

type RowTypesProps = {
    types?: IPokemonType[]
}

export const RowTypes = ({ types }: RowTypesProps) => {
    return (
        <S.Wrapper>
            {types?.map((item, index) => (
                <div key={index}>
                    <BadgeType type={item.type.name} />
                </div>
            ))}
        </S.Wrapper>
    )
}
