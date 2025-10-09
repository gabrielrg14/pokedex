import { create } from "zustand"
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

export const useStore = create<SpriteStore>()((set) => ({
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
            const sprite = {
                ...state.sprite,
                version,
                position:
                    version === SpriteVersion.official
                        ? SpritePosition.front
                        : state.sprite.position
            }
            localStorage.setItem(SPRITE_STORAGE_KEY, JSON.stringify(sprite))
            return { sprite }
        }),
    toggleSpritePosition: () =>
        set((state) => {
            const position =
                state.sprite.position === SpritePosition.front
                    ? SpritePosition.back
                    : SpritePosition.front
            const sprite = { ...state.sprite, position }
            localStorage.setItem(SPRITE_STORAGE_KEY, JSON.stringify(sprite))
            return { sprite }
        }),
    toggleSpriteType: () =>
        set((state) => {
            const type =
                state.sprite.type === SpriteType.default
                    ? SpriteType.shiny
                    : SpriteType.default
            const sprite = { ...state.sprite, type }
            localStorage.setItem(SPRITE_STORAGE_KEY, JSON.stringify(sprite))
            return { sprite }
        })
}))
