import { create } from "zustand"
import { persist } from "zustand/middleware"
import { SPRITE_MENU_STORAGE_KEY } from "common"

export enum SpriteVersion {
    official = "official",
    pixelated = "pixelated"
}

export enum SpritePosition {
    front = "front",
    back = "back"
}

export enum SpriteType {
    default = "default",
    shiny = "shiny"
}

export type Sprite = {
    isMenuOpen: boolean
    version: SpriteVersion
    position: SpritePosition
    type: SpriteType
}

type SpriteMenuStore = {
    sprite: Sprite
    toggleMenuOpen: () => void
    toggleSpriteVersion: () => void
    toggleSpritePosition: () => void
    toggleSpriteType: () => void
}

export const useSpriteMenuStore = create<SpriteMenuStore>()(
    persist(
        (set) => ({
            sprite: {
                isMenuOpen: false,
                version: SpriteVersion.official,
                position: SpritePosition.front,
                type: SpriteType.default
            },
            toggleMenuOpen: () =>
                set((state) => {
                    return {
                        sprite: {
                            ...state.sprite,
                            isMenuOpen: !state.sprite.isMenuOpen
                        }
                    }
                }),
            toggleSpriteVersion: () =>
                set((state) => {
                    const version =
                        state.sprite.version === SpriteVersion.official
                            ? SpriteVersion.pixelated
                            : SpriteVersion.official
                    return {
                        sprite: {
                            ...state.sprite,
                            version,
                            position:
                                version === SpriteVersion.official
                                    ? SpritePosition.front
                                    : state.sprite.position
                        }
                    }
                }),
            toggleSpritePosition: () =>
                set((state) => {
                    const position =
                        state.sprite.position === SpritePosition.front
                            ? SpritePosition.back
                            : SpritePosition.front
                    return { sprite: { ...state.sprite, position } }
                }),
            toggleSpriteType: () =>
                set((state) => {
                    const type =
                        state.sprite.type === SpriteType.default
                            ? SpriteType.shiny
                            : SpriteType.default
                    return { sprite: { ...state.sprite, type } }
                })
        }),
        { name: SPRITE_MENU_STORAGE_KEY, version: 1 }
    )
)
