import * as S from "./styles"

type ContainerProps = {
    className?: string
    children: React.ReactNode
}

export const Container = ({ className, children }: ContainerProps) => {
    return <S.Container className={className}>{children}</S.Container>
}
