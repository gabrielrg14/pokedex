import * as S from "./styles"
import Image from "next/image"
import { SpinnerLoader } from "components"
import { useListFilterStore } from "store"

type TypeCounterProps = {
    count: number
    isLoading: boolean
}

export const TypeCounter = ({ count, isLoading }: TypeCounterProps) => {
    const { filter } = useListFilterStore()

    return (
        <S.Wrapper>
            {isLoading ? (
                <SpinnerLoader size={32} color="var(--dark-color)" />
            ) : (
                <>
                    <Image
                        src={`/images/types/${filter.type}.svg`}
                        width={32}
                        height={32}
                        alt={filter.type}
                    />
                    <S.Counter>{count}</S.Counter>
                </>
            )}
        </S.Wrapper>
    )
}
