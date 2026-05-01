import * as S from "./styles"
import { Cries } from "interfaces"
import { CryButton } from "./CryButton"

type TitleProps = {
    name: string
    number: number
    cries: Cries
}

export const Title = ({ name, number, cries }: TitleProps) => {
    return (
        <S.Wrapper>
            <S.Name>{name}</S.Name>
            <CryButton name={name} number={number} cries={cries} />
        </S.Wrapper>
    )
}
