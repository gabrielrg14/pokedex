import { useState, useCallback, useEffect } from "react";

import * as S from "./styles";
import Header from "components/Header";
import Footer from "components/Footer";

import { Sprite, SpriteContext } from "common/contexts/sprite";

const STORAGE_KEY = "pokemon_sprite";

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [sprite, setSprite] = useState("front_default" as Sprite);

    const toggleSprite = useCallback((sprite: Sprite) => {
        setSprite(sprite)
        localStorage.setItem(STORAGE_KEY, sprite)
    }, []);

    useEffect(() => {
        const spriteStorage = localStorage.getItem(STORAGE_KEY)
        if(spriteStorage) setSprite(spriteStorage as Sprite)
    }, [])

    return (
        <SpriteContext.Provider value={{ sprite, toggleSprite }}>
            <Header />
            <S.Main>{children}</S.Main>
            <Footer />
        </SpriteContext.Provider>
    )
}

export default Layout;