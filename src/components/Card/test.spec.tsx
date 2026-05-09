import {
    render,
    screen,
    waitFor,
    renderHook,
    act
} from "@testing-library/react"
import { pokemonMocks } from "test/mocks"
import {
    SpritePosition,
    SpriteType,
    SpriteVersion,
    useSpriteMenuStore
} from "store"
import {
    QueryClient,
    QueryClientProvider,
    useQuery
} from "@tanstack/react-query"
import { pokedexService } from "services"

import { Card } from "."

const QueryClientWrapper = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

describe("<Card />", () => {
    const renderQueryHook = (name: string) =>
        renderHook(
            () =>
                useQuery({
                    queryKey: ["getPokemon", name],
                    queryFn: () => pokedexService.getPokemonByQuery(name)
                }),
            {
                wrapper: QueryClientWrapper
            }
        )

    beforeEach(() => {
        const { result } = renderHook(() => useSpriteMenuStore())

        result.current.sprite = {
            loading: false,
            isMenuOpen: false,
            version: SpriteVersion.official,
            position: SpritePosition.front,
            type: SpriteType.default
        }
    })

    it("should render pokemon link with the correct attributes", async () => {
        render(
            <QueryClientWrapper>
                <Card name={pokemonMocks.venusaur.name} />
            </QueryClientWrapper>
        )

        const { result } = renderQueryHook(pokemonMocks.venusaur.name)

        await waitFor(() => expect(result.current.isLoading).toBe(false))

        const link = screen.getByRole("link", { name: /venusaur/i })
        expect(link).toBeInTheDocument()
        expect(link).toHaveAttribute("href", "/pokemon/venusaur")
        expect(link).toHaveAccessibleName(/venusaur/i)
    })

    it("should render the fallback image during loading and then pokemon image when available", async () => {
        render(
            <QueryClientWrapper>
                <Card name={pokemonMocks.venusaur.name} />
            </QueryClientWrapper>
        )

        const { result } = renderQueryHook(pokemonMocks.venusaur.name)

        await waitFor(() => expect(result.current.isLoading).toBe(true))

        const fallback = screen.getByRole("img", { name: /venusaur fallback/i })
        expect(fallback).toBeInTheDocument()

        await waitFor(() => expect(result.current.isLoading).toBe(false))

        expect(
            screen.getByRole("img", { name: /venusaur/i })
        ).toBeInTheDocument()
    })

    it("should render image with unset imageRendering when sprite version is not pixelated", async () => {
        render(
            <QueryClientWrapper>
                <Card name={pokemonMocks.charizard.name} />
            </QueryClientWrapper>
        )

        const { result } = renderQueryHook(pokemonMocks.venusaur.name)

        await waitFor(() => expect(result.current.isLoading).toBe(false))

        expect(screen.getByRole("img", { name: /charizard/i })).toHaveStyle(
            "image-rendering: unset"
        )
    })

    it("should render image with pixelated imageRendering when the sprite version is pixelated", async () => {
        render(
            <QueryClientWrapper>
                <Card name={pokemonMocks.charizard.name} />
            </QueryClientWrapper>
        )

        const { result: useQueryResult } = renderQueryHook(
            pokemonMocks.venusaur.name
        )

        await waitFor(() =>
            expect(useQueryResult.current.isLoading).toBe(false)
        )

        const { result: useSpriteResult } = renderHook(() =>
            useSpriteMenuStore()
        )

        act(() => useSpriteResult.current.toggleSpriteVersion())

        await waitFor(() =>
            expect(useSpriteResult.current.sprite.version).toBe(
                SpriteVersion.pixelated
            )
        )

        expect(screen.getByRole("img", { name: /charizard/i })).toHaveStyle(
            "image-rendering: pixelated"
        )
    })

    it("should render the fallback image when the sprite is loading", async () => {
        render(
            <QueryClientWrapper>
                <Card name={pokemonMocks.venusaur.name} />
            </QueryClientWrapper>
        )

        const { result: useQueryResult } = renderQueryHook(
            pokemonMocks.venusaur.name
        )

        await waitFor(() =>
            expect(useQueryResult.current.isLoading).toBe(false)
        )

        const { result: useSpriteResult } = renderHook(() =>
            useSpriteMenuStore()
        )

        act(() => useSpriteResult.current.setLoadingSprite(true))

        await waitFor(() =>
            expect(useSpriteResult.current.sprite.loading).toBe(true)
        )

        expect(
            screen.getByRole("img", { name: /venusaur fallback/i })
        ).toBeInTheDocument()
    })
})
