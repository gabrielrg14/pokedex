import { useMemo } from "react"

import * as S from "./styles"
import { Directions } from "react-floating-button-menu"
import { CatchingPokemon } from "@styled-icons/material-twotone/CatchingPokemon"
import { Images } from "@styled-icons/entypo/Images"
import { Close, Repeat, Sparkles } from "@styled-icons/ionicons-solid"
import {
    SpritePosition,
    SpriteType,
    SpriteVersion,
    useSpriteMenuStore
} from "store"

export const SpriteMenu = () => {
    const {
        sprite,
        toggleMenuOpen,
        toggleSpriteVersion,
        toggleSpritePosition,
        toggleSpriteType
    } = useSpriteMenuStore()

    const hasSpriteFilter = useMemo(
        () =>
            sprite.version !== SpriteVersion.official ||
            sprite.position !== SpritePosition.front ||
            sprite.type !== SpriteType.default,
        [sprite]
    )

    return (
        <S.SpriteMenu
            slideSpeed={500}
            isOpen={sprite.isMenuOpen}
            spacing={10}
            direction={Directions.Up}
        >
            <S.MenuButton
                title={sprite.isMenuOpen ? "Close menu" : "Open menu"}
                isOpen={sprite.isMenuOpen}
                iconResting={
                    <CatchingPokemon
                        size={32}
                        color={
                            hasSpriteFilter
                                ? "var(--primary-color)"
                                : "var(--light-color)"
                        }
                    />
                }
                iconActive={
                    <Close
                        size={32}
                        color={
                            hasSpriteFilter
                                ? "var(--primary-color)"
                                : "var(--light-color)"
                        }
                    />
                }
                size={64}
                background="var(--dark-color)"
                onClick={() => toggleMenuOpen()}
                data-testid="sprite-menu-button"
            />
            <S.MenuButtonOption
                title="Toggle sprite"
                icon={
                    <Images
                        size={24}
                        className={
                            sprite.version === SpriteVersion.pixelated
                                ? "active"
                                : ""
                        }
                        data-testid="sprite-option-icon"
                    />
                }
                size={48}
                background="var(--dark-color)"
                onClick={() => toggleSpriteVersion()}
                data-testid="sprite-option"
            />
            <S.MenuButtonOption
                title="Toggle rotation"
                icon={
                    <Repeat
                        size={24}
                        className={
                            sprite.position === SpritePosition.back
                                ? "active"
                                : ""
                        }
                        data-testid="rotation-option-icon"
                    />
                }
                size={48}
                className={
                    sprite.version === SpriteVersion.official ? "disabled" : ""
                }
                background="var(--dark-color)"
                onClick={() =>
                    sprite.version !== SpriteVersion.official &&
                    toggleSpritePosition()
                }
                data-testid="rotation-option"
            />
            <S.MenuButtonOption
                title="Toggle shiny"
                icon={
                    <Sparkles
                        size={24}
                        className={
                            sprite.type === SpriteType.shiny ? "active" : ""
                        }
                        data-testid="shiny-option-icon"
                    />
                }
                size={48}
                background="var(--dark-color)"
                onClick={() => toggleSpriteType()}
                data-testid="shiny-option"
            />
        </S.SpriteMenu>
    )
}
