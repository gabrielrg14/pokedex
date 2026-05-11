import * as S from "./styles"
import Image from "next/image"
import { Resource } from "interfaces"
import { useListFilterStore } from "store"
import { formatName, getColorsByType } from "utils"

export type TypeListProps = {
    types: Resource[]
    filterByType: (type: string) => void
}

export const TypeList = ({ types, filterByType }: TypeListProps) => {
    const { filter } = useListFilterStore()

    return (
        <S.List>
            {types.map((type, index) => (
                <li key={index}>
                    <S.Item
                        className={filter.type === type.name ? "selected" : ""}
                        onClick={() => filterByType(type.name)}
                    >
                        <Image
                            src={`/images/types/${type.name}.svg`}
                            width={24}
                            height={24}
                            alt={type.name}
                        />
                        <S.Type
                            typeColor={
                                getColorsByType(type.name).backgroundColor
                            }
                        >
                            {formatName(type.name)}
                        </S.Type>
                    </S.Item>
                </li>
            ))}
        </S.List>
    )
}
