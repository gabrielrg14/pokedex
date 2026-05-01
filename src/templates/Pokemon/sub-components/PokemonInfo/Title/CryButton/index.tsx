import { useCallback, useEffect, useMemo } from "react"

import * as S from "./styles"
import { Cries } from "interfaces"
import { SpriteVersion, useSpriteMenuStore } from "store"
import { VolumeUp } from "styled-icons/material-outlined"

type CryButtonProps = {
    name: string
    number: number
    cries: Cries
}

export const CryButton = ({ name, number, cries }: CryButtonProps) => {
    const { sprite } = useSpriteMenuStore()

    const crySrc = useMemo(() => {
        if (!sprite.loading)
            return sprite.version === SpriteVersion.pixelated && cries?.legacy
                ? cries?.legacy
                : cries?.latest
    }, [sprite, cries])

    const playCry = useCallback(() => {
        const cryAudioElement = document.getElementById(
            `cry-${number}`
        ) as HTMLAudioElement

        if (cryAudioElement) {
            cryAudioElement.volume = 0.05
            cryAudioElement.load()
        }
    }, [number])

    useEffect(() => {
        playCry()
    }, [playCry])

    return (
        <>
            <audio id={`cry-${number}`} src={crySrc} autoPlay />
            <S.CryButton
                type="button"
                title={`${name} cry`}
                onClick={() => playCry()}
            >
                <VolumeUp size={24} color="var(--dark-color)" />
            </S.CryButton>
        </>
    )
}
