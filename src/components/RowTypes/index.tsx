import * as S from "./styles"
import BadgeType from "components/BadgeType"

import { Type } from "common/utils/pokemon"

type RowTypesProps = {
    types: Type[] | undefined
}

const RowTypes = ({ types }: RowTypesProps) => {
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

export default RowTypes
