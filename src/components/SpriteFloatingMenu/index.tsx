import { useMemo } from "react"

import * as S from "./styles"
import { CatchingPokemon } from "@styled-icons/material-twotone/CatchingPokemon"
import { Images } from "@styled-icons/entypo/Images"
import { Close, Repeat, Sparkles } from "@styled-icons/ionicons-solid"
import {
    SpritePosition,
    SpriteType,
    SpriteVersion,
    useSpriteMenuStore
} from "store"

export const SpriteFloatingMenu = () => {
    const {
        sprite,
        toggleMenuOpen,
        toggleSpriteVersion,
        toggleSpritePosition,
        toggleSpriteType
    } = useSpriteMenuStore()

    const hasActiveFilter = useMemo(
        () =>
            sprite.version !== SpriteVersion.official ||
            sprite.position !== SpritePosition.front ||
            sprite.type !== SpriteType.default,
        [sprite]
    )

    return (
        <S.FloatingMenu>
            <S.MainButton
                title={sprite.isMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => toggleMenuOpen()}
            >
                <S.MainButtonIcon isOpen={sprite.isMenuOpen}>
                    {sprite.isMenuOpen ? (
                        <Close
                            size={32}
                            color={
                                hasActiveFilter
                                    ? "var(--primary-color)"
                                    : "var(--light-color)"
                            }
                        />
                    ) : (
                        <CatchingPokemon
                            size={32}
                            color={
                                hasActiveFilter
                                    ? "var(--primary-color)"
                                    : "var(--light-color)"
                            }
                        />
                    )}
                </S.MainButtonIcon>
            </S.MainButton>

            <S.MenuButton
                title="Toggle sprite"
                isOpen={sprite.isMenuOpen}
                onClick={() => toggleSpriteVersion()}
            >
                <Images
                    size={24}
                    className={
                        sprite.version === SpriteVersion.pixelated
                            ? "active"
                            : ""
                    }
                />
            </S.MenuButton>

            <S.MenuButton
                title="Toggle rotation"
                isOpen={sprite.isMenuOpen}
                className={
                    sprite.version === SpriteVersion.official ? "disabled" : ""
                }
                onClick={() =>
                    sprite.version !== SpriteVersion.official &&
                    toggleSpritePosition()
                }
            >
                <Repeat
                    size={24}
                    className={
                        sprite.position === SpritePosition.back ? "active" : ""
                    }
                />
            </S.MenuButton>

            <S.MenuButton
                title="Toggle shiny"
                isOpen={sprite.isMenuOpen}
                onClick={() => toggleSpriteType()}
            >
                <Sparkles
                    size={24}
                    className={sprite.type === SpriteType.shiny ? "active" : ""}
                />
            </S.MenuButton>
        </S.FloatingMenu>
    )
}
