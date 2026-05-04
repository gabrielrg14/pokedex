import * as S from "./styles"

export const CardImage = () => {
    return (
        <S.PsyduckImage
            src="/images/psyduck.png"
            width={256}
            height={256}
            alt="Psyduck confused"
            priority
        />
    )
}
