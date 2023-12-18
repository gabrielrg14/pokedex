import { create } from "zustand"

export type Sprite = "front_default" | "front_shiny"

export const STORAGE_KEY = "pokemon_sprite"

type SpriteStore = {
    sprite: Sprite
    setSprite: (sprite: Sprite) => void
    toggleSprite: () => void
}

export const useStore = create<SpriteStore>()((set) => ({
    sprite: "front_default",
    setSprite: (sprite: Sprite) => set(() => ({ sprite })),
    toggleSprite: () =>
        set((state) => {
            const sprite =
                state.sprite === "front_default"
                    ? "front_shiny"
                    : "front_default"
            localStorage.setItem(STORAGE_KEY, sprite)
            return { sprite }
        })
}))
