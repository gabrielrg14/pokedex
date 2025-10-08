import { create } from "zustand"
import { SPRITE_STORAGE_KEY } from "common"

export enum SpriteVersion {
    official = "official",
    pixelated = "pixelated"
}

export enum SpriteType {
    default = "front_default",
    shiny = "front_shiny"
}

export type Sprite = {
    version: SpriteVersion
    type: SpriteType
}

type SpriteStore = {
    sprite: Sprite
    setSprite: (sprite: Sprite) => void
    toggleSpriteVersion: () => void
    toggleSpriteType: () => void
}

export const useStore = create<SpriteStore>()((set) => ({
    sprite: {
        version: SpriteVersion.official,
        type: SpriteType.default
    },
    setSprite: (sprite: Sprite) => set(() => ({ sprite })),
    toggleSpriteVersion: () =>
        set((state) => {
            const version =
                state.sprite.version === SpriteVersion.official
                    ? SpriteVersion.pixelated
                    : SpriteVersion.official
            const sprite = { ...state.sprite, version }
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
