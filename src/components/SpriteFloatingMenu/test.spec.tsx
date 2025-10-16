import { render, screen, fireEvent } from "@testing-library/react"

import {
    SpritePosition,
    SpriteType,
    SpriteVersion,
    useSpriteMenuStore
} from "store"

import { SpriteFloatingMenu } from "."

describe("<SpriteFloatingMenu />", () => {
    beforeEach(() => {
        useSpriteMenuStore.setState({
            sprite: {
                isMenuOpen: false,
                version: SpriteVersion.official,
                position: SpritePosition.front,
                type: SpriteType.default
            }
        })
    })

    it("should render the main button", () => {
        render(<SpriteFloatingMenu />)

        const mainButton = screen.getByRole("button", { name: /open menu/i })
        expect(mainButton).toBeInTheDocument()
    })

    it("should render the menu buttons", () => {
        render(<SpriteFloatingMenu />)

        const spriteButton = screen.getByRole("button", {
            name: /toggle sprite/i
        })
        const rotationButton = screen.getByRole("button", {
            name: /toggle rotation/i
        })
        const shinyButton = screen.getByRole("button", {
            name: /toggle shiny/i
        })

        expect(spriteButton).toBeInTheDocument()
        expect(rotationButton).toBeInTheDocument()
        expect(shinyButton).toBeInTheDocument()
    })

    it("should toggle menu open and when main button is clicked", () => {
        render(<SpriteFloatingMenu />)

        expect(useSpriteMenuStore.getState().sprite.isMenuOpen).toBe(false)

        openSpriteFloatingMenu()

        expect(useSpriteMenuStore.getState().sprite.isMenuOpen).toBe(true)
    })

    it("should toggle button title when main button is clicked", () => {
        render(<SpriteFloatingMenu />)

        const mainButton = screen.getByRole("button", { name: /open menu/i })

        expect(mainButton).toHaveAccessibleName(/open menu/i)

        openSpriteFloatingMenu()

        expect(mainButton).toHaveAccessibleName(/close menu/i)
    })

    it("should show the menu buttons when main button is clicked", () => {
        render(<SpriteFloatingMenu />)

        const spriteButton = screen.getByRole("button", {
            name: /toggle sprite/i
        })
        const rotationButton = screen.getByRole("button", {
            name: /toggle rotation/i
        })
        const shinyButton = screen.getByRole("button", {
            name: /toggle shiny/i
        })

        expect(spriteButton).not.toBeVisible()
        expect(rotationButton).not.toBeVisible()
        expect(shinyButton).not.toBeVisible()

        openSpriteFloatingMenu()

        expect(spriteButton).toBeVisible()
        expect(rotationButton).toBeVisible()
        expect(shinyButton).toBeVisible()
    })

    it("should toggle sprite version when sprite button is clicked", () => {
        render(<SpriteFloatingMenu />)

        expect(useSpriteMenuStore.getState().sprite.version).toBe(
            SpriteVersion.official
        )

        openSpriteFloatingMenu()

        const spriteButton = screen.getByRole("button", {
            name: /toggle sprite/i
        })
        fireEvent.click(spriteButton)

        expect(useSpriteMenuStore.getState().sprite.version).toBe(
            SpriteVersion.pixelated
        )
    })

    it("should toggle sprite position when rotation button is clicked and version is pixelated", () => {
        useSpriteMenuStore.setState({
            sprite: {
                ...useSpriteMenuStore.getState().sprite,
                version: SpriteVersion.pixelated
            }
        })

        render(<SpriteFloatingMenu />)

        expect(useSpriteMenuStore.getState().sprite.position).toBe(
            SpritePosition.front
        )

        openSpriteFloatingMenu()

        const rotationButton = screen.getByRole("button", {
            name: /toggle rotation/i
        })
        fireEvent.click(rotationButton)

        expect(useSpriteMenuStore.getState().sprite.position).toBe(
            SpritePosition.back
        )

        fireEvent.click(rotationButton)

        expect(useSpriteMenuStore.getState().sprite.position).toBe(
            SpritePosition.front
        )
    })

    it("should not toggle sprite position when rotation button is clicked and version is official", () => {
        render(<SpriteFloatingMenu />)

        expect(useSpriteMenuStore.getState().sprite.position).toBe(
            SpritePosition.front
        )

        openSpriteFloatingMenu()

        const rotationButton = screen.getByRole("button", {
            name: /toggle rotation/i
        })
        fireEvent.click(rotationButton)

        expect(useSpriteMenuStore.getState().sprite.position).toBe(
            SpritePosition.front
        )
    })

    it("should toggle sprite type when shiny button is clicked", () => {
        render(<SpriteFloatingMenu />)

        expect(useSpriteMenuStore.getState().sprite.type).toBe(
            SpriteType.default
        )

        openSpriteFloatingMenu()

        const shinyButton = screen.getByRole("button", {
            name: /toggle shiny/i
        })
        fireEvent.click(shinyButton)

        expect(useSpriteMenuStore.getState().sprite.type).toBe(SpriteType.shiny)
    })
})

const openSpriteFloatingMenu = () => {
    const mainButton = screen.getByRole("button", { name: /open menu/i })
    fireEvent.click(mainButton) // open menu so options are interactive
}
