import { render, screen } from "@testing-library/react"
import { typeMocks } from "test/mocks"

import { RowTypes } from "."

describe("<RowTypes />", () => {
    describe("when 1 type were passed", () => {
        it("should render the electric badge when passing only the electric type", () => {
            render(<RowTypes types={[{ type: typeMocks.types.electric }]} />)

            const imageElectric = screen.getByRole("img", {
                name: /type electric/i
            })

            expect(imageElectric).toBeInTheDocument()
            expect(imageElectric).toHaveAccessibleName(/type electric/i)
        })

        it("should render the electric text with the correct styles when passing only the electric type", () => {
            render(<RowTypes types={[{ type: typeMocks.types.electric }]} />)

            const textElectric = screen.getByText(/electric/i)

            expect(textElectric).toBeInTheDocument()
            expect(textElectric).toHaveStyle({
                "background-color": "rgb(243, 210, 59)",
                color: "rgb(255, 255, 255)"
            })
        })
    })
    describe("when 2 types were passed", () => {
        it("should render the fighting and poison badges when passing the fighting and poison types", () => {
            render(
                <RowTypes
                    types={[
                        { type: typeMocks.types.fighting },
                        { type: typeMocks.types.poison }
                    ]}
                />
            )

            const imageFighting = screen.getByRole("img", {
                name: /type fighting/i
            })
            const imagePoison = screen.getByRole("img", {
                name: /type poison/i
            })

            expect(imageFighting).toBeInTheDocument()
            expect(imageFighting).toHaveAccessibleName(/type fighting/i)
            expect(imagePoison).toBeInTheDocument()
            expect(imagePoison).toHaveAccessibleName(/type poison/i)
        })

        it("should render the fighting and poison texts with the correct styles when passing the fighting and poison types", () => {
            render(
                <RowTypes
                    types={[
                        { type: typeMocks.types.fighting },
                        { type: typeMocks.types.poison }
                    ]}
                />
            )

            const textFighting = screen.getByText(/fighting/i)
            const textPoison = screen.getByText(/poison/i)

            expect(textFighting).toBeInTheDocument()
            expect(textFighting).toHaveStyle({
                "background-color": "rgb(206, 64, 105)",
                color: "rgb(255, 255, 255)"
            })
            expect(textPoison).toBeInTheDocument()
            expect(textPoison).toHaveStyle({
                "background-color": "rgb(171, 106, 200)",
                color: "rgb(255, 255, 255)"
            })
        })

        it("should render the ice and ground badges when passing the ice and ground types", () => {
            render(
                <RowTypes
                    types={[
                        { type: typeMocks.types.ice },
                        { type: typeMocks.types.ground }
                    ]}
                />
            )

            const imageIce = screen.getByRole("img", {
                name: /type ice/i
            })
            const imageGround = screen.getByRole("img", {
                name: /type ground/i
            })

            expect(imageIce).toBeInTheDocument()
            expect(imageIce).toHaveAccessibleName(/type ice/i)
            expect(imageGround).toBeInTheDocument()
            expect(imageGround).toHaveAccessibleName(/type ground/i)
        })

        it("should render the ice and ground texts with the correct styles when passing the ice and ground types", () => {
            render(
                <RowTypes
                    types={[
                        { type: typeMocks.types.ice },
                        { type: typeMocks.types.ground }
                    ]}
                />
            )

            const textIce = screen.getByText(/ice/i)
            const textGround = screen.getByText(/ground/i)

            expect(textIce).toBeInTheDocument()
            expect(textIce).toHaveStyle({
                "background-color": "rgb(116, 206, 192)",
                color: "rgb(255, 255, 255)"
            })
            expect(textGround).toBeInTheDocument()
            expect(textGround).toHaveStyle({
                "background-color": "rgb(217, 119, 70)",
                color: "rgb(255, 255, 255)"
            })
        })
    })
})
