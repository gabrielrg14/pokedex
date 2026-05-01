import { useMemo } from "react"

import * as S from "./styles"
import { Sprites } from "interfaces"
import { SpriteVersion, useSpriteMenuStore } from "store"

type PokemonImageProps = {
    name: string
    sprites: Sprites
}

export const PokemonImage = ({ name, sprites }: PokemonImageProps) => {
    const { sprite } = useSpriteMenuStore()

    const imageSrc = useMemo(() => {
        if (!sprite.loading)
            return sprite.version === SpriteVersion.pixelated
                ? sprites?.[`${sprite.position}_${sprite.type}`]
                : sprites?.other?.["official-artwork"]?.[
                      `${sprite.position}_${sprite.type}`
                  ]
    }, [sprite, sprites])

    return (
        <S.Wrapper>
            {imageSrc ? (
                <S.Image
                    src={imageSrc}
                    width={256}
                    height={256}
                    alt={name}
                    imageRendering={
                        sprite.version === SpriteVersion.pixelated
                            ? "pixelated"
                            : "unset"
                    }
                    priority
                />
            ) : (
                <S.Image
                    src="/images/types/all.svg"
                    width={228}
                    height={228}
                    alt={`${name} fallback`}
                    priority
                />
            )}
        </S.Wrapper>
    )
}
