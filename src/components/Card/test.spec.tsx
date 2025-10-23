import { render, screen, waitFor } from "@testing-library/react"
import { pokemonMocks } from "test/mocks"
import {
    useSpriteMenuStore,
    SpriteVersion,
    SpriteType,
    SpritePosition
} from "store"

import { Card } from "."

describe("<Card />", () => {
    beforeEach(() => {
        useSpriteMenuStore.setState({
            sprite: {
                loading: false,
                version: SpriteVersion.official,
                position: SpritePosition.front,
                type: SpriteType.default,
                isMenuOpen: false
            }
        })
    })

    it("should render pokemon link with the correct attributes", async () => {
        render(<Card pokemon={pokemonMocks.venusaur} />)

        await waitFor(() =>
            expect(
                screen.getByRole("img", { name: "Venusaur" })
            ).toBeInTheDocument()
        )

        const link = screen.getByRole("link", { name: /venusaur/i })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("href", "/pokemon/venusaur")
        expect(link).toHaveAccessibleName(/venusaur/i)
    })

    it("should render the fallback image during loading and then pokemon image when available", async () => {
        render(<Card pokemon={pokemonMocks.venusaur} />)

        const fallback = screen.getByRole("img", { name: /venusaur fallback/i })
        expect(fallback).toBeInTheDocument()

        await waitFor(() =>
            expect(
                screen.getByRole("img", { name: "Venusaur" })
            ).toBeInTheDocument()
        )
    })

    it("should render the fallback image when the pokemon has no sprite available", async () => {
        const noImagePokemon = {
            ...pokemonMocks.blastoise,
            sprites: {
                front_default: "",
                front_shiny: "",
                other: {
                    "official-artwork": { front_default: "", front_shiny: "" }
                }
            }
        }

        render(<Card pokemon={noImagePokemon} />)

        await waitFor(() =>
            expect(
                screen.getByRole("img", { name: /blastoise fallback/i })
            ).toBeInTheDocument()
        )
    })

    it("should render image with pixelated imageRendering when the sprite version is pixelated", async () => {
        useSpriteMenuStore.setState({
            sprite: {
                loading: false,
                version: SpriteVersion.pixelated,
                position: SpritePosition.front,
                type: SpriteType.default,
                isMenuOpen: false
            }
        })

        render(<Card pokemon={pokemonMocks.charizard} />)

        await waitFor(() =>
            expect(
                screen.getByRole("img", { name: "Charizard" })
            ).toBeInTheDocument()
        )

        expect(screen.getByRole("img", { name: "Charizard" })).toHaveStyle({
            imageRendering: "pixelated"
        })
    })

    it("should render image with unset imageRendering when sprite version is not pixelated", async () => {
        useSpriteMenuStore.setState({
            sprite: {
                loading: false,
                version: SpriteVersion.official,
                position: SpritePosition.front,
                type: SpriteType.default,
                isMenuOpen: false
            }
        })

        render(<Card pokemon={pokemonMocks.charizard} />)

        await waitFor(() =>
            expect(
                screen.getByRole("img", { name: "Charizard" })
            ).toBeInTheDocument()
        )

        expect(screen.getByRole("img", { name: "Charizard" })).toHaveStyle({
            imageRendering: "unset"
        })
    })
})
