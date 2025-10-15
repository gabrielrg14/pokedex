import { render, screen, fireEvent } from "@testing-library/react"

import {
    SpritePosition,
    SpriteType,
    SpriteVersion,
    useSpriteMenuStore
} from "store"

import { SpriteMenu } from "."

describe("<SpriteMenu />", () => {
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

    it("should render the main menu button", () => {
        render(<SpriteMenu />)

        const menuButton = screen.getByTestId("sprite-menu-button")
        expect(menuButton).toBeInTheDocument()
    })

    it("should render the menu options", () => {
        render(<SpriteMenu />)

        const spriteOption = screen.getByTestId("sprite-option")
        const rotationOption = screen.getByTestId("rotation-option")
        const shinyOption = screen.getByTestId("shiny-option")

        expect(spriteOption).toBeInTheDocument()
        expect(rotationOption).toBeInTheDocument()
        expect(shinyOption).toBeInTheDocument()
    })

    it("should toggle menu open when main button is clicked", () => {
        render(<SpriteMenu />)

        expect(useSpriteMenuStore.getState().sprite.isMenuOpen).toBe(false)

        openSpriteMenu()

        expect(useSpriteMenuStore.getState().sprite.isMenuOpen).toBe(true)
    })

    it("should show the menu options when main button is clicked", () => {
        render(<SpriteMenu />)

        const spriteOption = screen.getByTestId("sprite-option")
        const rotationOption = screen.getByTestId("rotation-option")
        const shinyOption = screen.getByTestId("shiny-option")

        expect(spriteOption).not.toBeVisible()
        expect(rotationOption).not.toBeVisible()
        expect(shinyOption).not.toBeVisible()

        openSpriteMenu()

        expect(spriteOption).toBeVisible()
        expect(rotationOption).toBeVisible()
        expect(shinyOption).toBeVisible()
    })

    it("should toggle sprite version when sprite option is clicked", () => {
        render(<SpriteMenu />)

        expect(useSpriteMenuStore.getState().sprite.version).toBe(
            SpriteVersion.official
        )

        openSpriteMenu()

        const spriteOption = screen.getByTestId("sprite-option")
        fireEvent.click(spriteOption)

        expect(useSpriteMenuStore.getState().sprite.version).toBe(
            SpriteVersion.pixelated
        )
    })

    it("should toggle sprite position when rotation option is clicked and version is pixelated", () => {
        useSpriteMenuStore.setState({
            sprite: {
                ...useSpriteMenuStore.getState().sprite,
                version: SpriteVersion.pixelated
            }
        })

        render(<SpriteMenu />)

        expect(useSpriteMenuStore.getState().sprite.position).toBe(
            SpritePosition.front
        )

        openSpriteMenu()

        const rotationOption = screen.getByTestId("rotation-option")
        fireEvent.click(rotationOption)

        expect(useSpriteMenuStore.getState().sprite.position).toBe(
            SpritePosition.back
        )

        fireEvent.click(rotationOption)

        expect(useSpriteMenuStore.getState().sprite.position).toBe(
            SpritePosition.front
        )
    })

    it("should not toggle sprite position when rotation option is clicked and version is official", () => {
        render(<SpriteMenu />)

        expect(useSpriteMenuStore.getState().sprite.position).toBe(
            SpritePosition.front
        )

        openSpriteMenu()

        const rotationOption = screen.getByTestId("rotation-option")
        fireEvent.click(rotationOption)

        expect(useSpriteMenuStore.getState().sprite.position).toBe(
            SpritePosition.front
        )
    })

    it("should toggle sprite type when shiny option is clicked", () => {
        render(<SpriteMenu />)

        expect(useSpriteMenuStore.getState().sprite.type).toBe(
            SpriteType.default
        )

        openSpriteMenu()

        const shinyOption = screen.getByTestId("shiny-option")
        fireEvent.click(shinyOption)

        expect(useSpriteMenuStore.getState().sprite.type).toBe(SpriteType.shiny)
    })
})

const openSpriteMenu = () => {
    const spriteMenuButton = screen.getByTestId("sprite-menu-button")
    fireEvent.click(spriteMenuButton) // open menu so options are interactive
}
