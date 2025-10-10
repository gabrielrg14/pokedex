import { create } from "zustand"
import { persist } from "zustand/middleware"
import { SPRITE_STORAGE_KEY } from "common"

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
    version: SpriteVersion
    position: SpritePosition
    type: SpriteType
}

type SpriteStore = {
    sprite: Sprite
    setSprite: (sprite: Sprite) => void
    toggleSpriteVersion: () => void
    toggleSpritePosition: () => void
    toggleSpriteType: () => void
}

export const useSpriteStore = create<SpriteStore>()(
    persist(
        (set) => ({
            sprite: {
                version: SpriteVersion.official,
                position: SpritePosition.front,
                type: SpriteType.default
            },
            setSprite: (sprite: Sprite) => set(() => ({ sprite })),
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
        { name: SPRITE_STORAGE_KEY }
    )
)
