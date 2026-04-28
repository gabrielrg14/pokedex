import * as S from "./styles"

type SpinnerLoaderProps = {
    size: number
    color: string
}

export const SpinnerLoader = ({ size, color }: SpinnerLoaderProps) => {
    return <S.Spinner size={size} color={color} />
}
