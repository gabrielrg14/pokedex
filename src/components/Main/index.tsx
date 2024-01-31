import * as S from "./styles"

type MainProps = {
    children: React.ReactNode
}

export const Main = ({ children }: MainProps) => {
    return <S.Main>{children}</S.Main>
}
