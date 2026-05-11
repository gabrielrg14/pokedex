import * as S from "./styles"
import { Cries } from "interfaces"
import { CryButton } from "./CryButton"

type TitleProps = {
    name: string
    cries: Cries
}

export const Title = ({ name, cries }: TitleProps) => {
    return (
        <S.Wrapper>
            <S.Name>{name}</S.Name>
            <CryButton name={name} cries={cries} />
        </S.Wrapper>
    )
}
