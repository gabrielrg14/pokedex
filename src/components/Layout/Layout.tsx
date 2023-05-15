import { useState, useCallback, useEffect } from 'react';

import { Sprite, SpriteContext } from "src/common/contexts/sprite";

import Header from "src/components/Header";
import Footer from "src/components/Footer";

import { Main } from "./styles";

const STORAGE_KEY = "pokemon_sprite";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {

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
            <Main>{children}</Main>
            <Footer />
        </SpriteContext.Provider>
    )
}

export default Layout;