import { render, screen, waitFor, fireEvent } from "@testing-library/react"
import { pokemonMocks } from "test/mocks"
import {
    useSpriteMenuStore,
    SpriteVersion,
    SpriteType,
    SpritePosition,
    useListFilterStore
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
                screen.getByRole("img", { name: /venusaur/i })
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
                screen.getByRole("img", { name: /venusaur/i })
            ).toBeInTheDocument()
        )
    })

    it("should render the fallback image when the pokemon has no sprite available", async () => {
        const noImagePokemon = {
            ...pokemonMocks.venusaur,
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
                screen.getByRole("img", { name: /venusaur fallback/i })
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
                screen.getByRole("img", { name: /charizard/i })
            ).toBeInTheDocument()
        )

        expect(screen.getByRole("img", { name: /charizard/i })).toHaveStyle({
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
                screen.getByRole("img", { name: /charizard/i })
            ).toBeInTheDocument()
        )

        expect(screen.getByRole("img", { name: /charizard/i })).toHaveStyle({
            imageRendering: "unset"
        })
    })

    it("should call setPageScroll when clicking on the card and update scroll property of listFilter store", async () => {
        Object.defineProperty(window, "pageYOffset", {
            value: 420
        })

        useListFilterStore.setState({
            filter: { ...useListFilterStore.getState().filter, scroll: 0 }
        })

        render(<Card pokemon={pokemonMocks.blastoise} />)

        await waitFor(() =>
            expect(
                screen.getByRole("img", { name: /blastoise/i })
            ).toBeInTheDocument()
        )

        const cardLink = screen.getByRole("link", { name: /blastoise/i })
        fireEvent.click(cardLink)

        expect(useListFilterStore.getState().filter.scroll).toBe(420)
    })
})
