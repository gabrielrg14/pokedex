import {
    render,
    screen,
    fireEvent,
    renderHook,
    act
} from "@testing-library/react"
import {
    SpritePosition,
    SpriteType,
    SpriteVersion,
    useSpriteMenuStore
} from "store"
import { pokemonMocks } from "test/mocks"

import { CryButton, CryButtonProps } from "."

describe("<CryButton />", () => {
    const mockName = pokemonMocks.blastoise.name
    const mockCries = pokemonMocks.blastoise.cries

    const defaultProps: CryButtonProps = {
        name: mockName,
        cries: mockCries
    }

    beforeEach(() => {
        jest.clearAllMocks()

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

        HTMLMediaElement.prototype.load = jest.fn()
        HTMLMediaElement.prototype.play = jest.fn()
    })

    it("should render button with title, type and icon", () => {
        const { container } = render(<CryButton {...defaultProps} />)

        const button = screen.getByRole("button", { name: /blastoise cry/i })
        const icon = container.querySelector("svg")

        expect(button).toBeInTheDocument()
        expect(button).toHaveAttribute("title", "blastoise cry")
        expect(button).toHaveAttribute("type", "button")
        expect(icon).toBeInTheDocument()
    })

    it("should render audio element with correct src and autoplay attributes", () => {
        const { container } = render(<CryButton {...defaultProps} />)

        const audio = container.querySelector(
            "#blastoise-cry"
        ) as HTMLAudioElement

        expect(audio).toBeInTheDocument()
        expect(audio).toHaveAttribute("src", mockCries.latest)
        expect(audio).toHaveAttribute("autoplay")
    })

    it("should have audio src with latest cry when sprite version is official", () => {
        const { container } = render(<CryButton {...defaultProps} />)

        const audio = container.querySelector(
            "#blastoise-cry"
        ) as HTMLAudioElement

        expect(audio.src).toContain(mockCries.latest)
    })

    it("should have audio src with legacy cry when sprite version is pixelated", () => {
        const { container } = render(<CryButton {...defaultProps} />)

        const { result } = renderHook(() => useSpriteMenuStore())

        act(() => {
            result.current.toggleSpriteVersion()
        })

        const audio = container.querySelector(
            "#blastoise-cry"
        ) as HTMLAudioElement

        expect(audio.src).toContain(mockCries.legacy)
    })

    it("should call audio load when button is clicked", () => {
        const { container } = render(<CryButton {...defaultProps} />)

        const button = screen.getByRole("button", { name: /blastoise cry/i })
        fireEvent.click(button)

        const audio = container.querySelector(
            "#blastoise-cry"
        ) as HTMLAudioElement

        expect(audio.load).toHaveBeenCalled()
    })

    it("should set audio volume to 0.05 when button is clicked", () => {
        const { container } = render(<CryButton {...defaultProps} />)

        const button = screen.getByRole("button", { name: /blastoise cry/i })
        fireEvent.click(button)

        const audio = container.querySelector(
            "#blastoise-cry"
        ) as HTMLAudioElement

        expect(audio.volume).toBe(0.05)
    })

    it("should call audio load on mount component", () => {
        const { container } = render(<CryButton {...defaultProps} />)

        const audio = container.querySelector(
            "#blastoise-cry"
        ) as HTMLAudioElement

        expect(audio.load).toHaveBeenCalled()
    })

    it("should update audio src when sprite version changes", () => {
        const { container, rerender } = render(<CryButton {...defaultProps} />)

        const audio = container.querySelector(
            "#blastoise-cry"
        ) as HTMLAudioElement

        expect(audio.src).toContain(mockCries.latest)

        const { result } = renderHook(() => useSpriteMenuStore())

        act(() => {
            result.current.toggleSpriteVersion()
        })

        rerender(<CryButton {...defaultProps} />)

        expect(audio.src).toContain(mockCries.legacy)
    })
})
