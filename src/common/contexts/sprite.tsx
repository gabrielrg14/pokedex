import { createContext } from 'react';

export type Sprite = "front_default" | "front_shiny";

interface SpriteData {
    sprite: Sprite,
    toggleSprite: (sprite: Sprite) => void
}

export const SpriteContext = createContext<SpriteData>({} as SpriteData)