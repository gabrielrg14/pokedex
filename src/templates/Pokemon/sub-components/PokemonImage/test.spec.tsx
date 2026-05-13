import { render, screen, renderHook, act } from "@testing-library/react"
import {
    SpritePosition,
    SpriteType,
    SpriteVersion,
    useSpriteMenuStore
} from "store"
import { pokemonMocks } from "test/mocks"

import { PokemonImage, PokemonImageProps } from "."

describe("<PokemonImage />", () => {
    const defaultProps: PokemonImageProps = {
        name: pokemonMocks.blastoise.name,
        sprites: pokemonMocks.blastoise.sprites
    }

    beforeEach(() => {
        const { result } = renderHook(() => useSpriteMenuStore())

        act(() => {
            result.current.sprite = {
                loading: false,
                isMenuOpen: false,
                version: SpriteVersion.official,
                position: SpritePosition.front,
                type: SpriteType.default
            }
        })
    })

    it("should render fallback image when sprite is loading", () => {
        render(<PokemonImage {...defaultProps} />)

        const { result } = renderHook(() => useSpriteMenuStore())

        act(() => {
            result.current.setLoadingSprite(true)
        })

        const fallbackImage = screen.getByRole("img", {
            name: /fallback/i
        })

        expect(fallbackImage).toBeInTheDocument()
        expect(fallbackImage).toHaveAttribute("src", "/images/types/all.svg")
    })

    it("should render pokemon image with correct attributes", () => {
        render(<PokemonImage {...defaultProps} />)

        const image = screen.getByRole("img", { name: /blastoise/i })

        expect(image).toHaveAttribute("alt", "blastoise")
        expect(image).toHaveAttribute("fetchpriority", "high")
        expect(image).toHaveAttribute("width", "256")
        expect(image).toHaveAttribute("height", "256")
    })

    it("should render fallback image with correct attributes", () => {
        render(<PokemonImage {...defaultProps} />)

        const { result } = renderHook(() => useSpriteMenuStore())

        act(() => {
            result.current.setLoadingSprite(true)
        })

        const fallbackImage = screen.getByRole("img", {
            name: /fallback/i
        })

        expect(fallbackImage).toHaveAttribute("alt", "blastoise fallback")
        expect(fallbackImage).toHaveAttribute("fetchpriority", "high")
        expect(fallbackImage).toHaveAttribute("width", "228")
        expect(fallbackImage).toHaveAttribute("height", "228")
    })

    it("should render official front default sprite when version is official, position is front and type is default", () => {
        render(<PokemonImage {...defaultProps} />)

        const imageSrc = screen
            .getByRole("img", { name: /blastoise/i })
            .getAttribute("src")

        expect(imageSrc).toContain(
            encodeURIComponent(
                pokemonMocks.blastoise.sprites.other["official-artwork"]
                    .front_default
            )
        )
    })

    it("should render official front shiny sprite when version is official, position is front and type is shiny", () => {
        render(<PokemonImage {...defaultProps} />)

        const { result } = renderHook(() => useSpriteMenuStore())

        act(() => {
            result.current.toggleSpriteType()
        })

        const imageSrc = screen
            .getByRole("img", { name: /blastoise/i })
            .getAttribute("src")

        expect(imageSrc).toContain(
            encodeURIComponent(
                pokemonMocks.blastoise.sprites.other["official-artwork"]
                    .front_shiny
            )
        )
    })

    it("should render front default sprite when sprite version is pixelated, position is front and type is default", () => {
        render(<PokemonImage {...defaultProps} />)

        const { result } = renderHook(() => useSpriteMenuStore())

        act(() => {
            result.current.toggleSpriteVersion()
        })

        const imageSrc = screen
            .getByRole("img", { name: /blastoise/i })
            .getAttribute("src")

        expect(imageSrc).toContain(
            encodeURIComponent(pokemonMocks.blastoise.sprites.front_default)
        )
    })

    it("should render back default sprite when version is pixelated, position is back and type is default", () => {
        render(<PokemonImage {...defaultProps} />)

        const { result } = renderHook(() => useSpriteMenuStore())

        act(() => {
            result.current.toggleSpriteVersion()
            result.current.toggleSpritePosition()
        })

        const imageSrc = screen
            .getByRole("img", { name: /blastoise/i })
            .getAttribute("src")

        expect(imageSrc).toContain(
            encodeURIComponent(pokemonMocks.blastoise.sprites.back_default!)
        )
    })

    it("should render front shiny sprite when version is pixelated, position is front and type is shiny", () => {
        render(<PokemonImage {...defaultProps} />)

        const { result } = renderHook(() => useSpriteMenuStore())

        act(() => {
            result.current.toggleSpriteVersion()
            result.current.toggleSpriteType()
        })

        const imageSrc = screen
            .getByRole("img", { name: /blastoise/i })
            .getAttribute("src")

        expect(imageSrc).toContain(
            encodeURIComponent(pokemonMocks.blastoise.sprites.front_shiny)
        )
    })

    it("should render back shiny sprite when version is pixelated, position is back and type is shiny", () => {
        render(<PokemonImage {...defaultProps} />)

        const { result } = renderHook(() => useSpriteMenuStore())

        act(() => {
            result.current.toggleSpriteVersion()
            result.current.toggleSpritePosition()
            result.current.toggleSpriteType()
        })

        const imageSrc = screen
            .getByRole("img", { name: /blastoise/i })
            .getAttribute("src")

        expect(imageSrc).toContain(
            encodeURIComponent(pokemonMocks.blastoise.sprites.back_shiny!)
        )
    })

    it("should apply unset imageRendering when version is official", () => {
        render(<PokemonImage {...defaultProps} />)

        expect(screen.getByRole("img", { name: /blastoise/i })).toHaveStyle(
            "image-rendering: unset"
        )
    })

    it("should apply pixelated imageRendering when version is pixelated", () => {
        render(<PokemonImage {...defaultProps} />)

        const { result } = renderHook(() => useSpriteMenuStore())

        act(() => {
            result.current.toggleSpriteVersion()
        })

        expect(screen.getByRole("img", { name: /blastoise/i })).toHaveStyle(
            "image-rendering: pixelated"
        )
    })

    it("should switch to pokemon image when loading sprite finishes", () => {
        const { rerender } = render(<PokemonImage {...defaultProps} />)

        const { result } = renderHook(() => useSpriteMenuStore())

        act(() => {
            result.current.setLoadingSprite(true)
        })

        const fallbackImage = screen.getByRole("img", {
            name: /fallback/i
        })
        expect(fallbackImage).toBeInTheDocument()

        act(() => {
            result.current.setLoadingSprite(false)
        })

        rerender(<PokemonImage {...defaultProps} />)

        const image = screen.getByRole("img", { name: /blastoise/i })

        expect(image).toBeInTheDocument()
        expect(image).not.toHaveAttribute("alt", /fallback/i)
    })
})
