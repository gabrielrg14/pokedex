import { create } from "zustand"
import { STORAGE_KEY } from "common"

export type Sprite = "front_default" | "front_shiny"

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
