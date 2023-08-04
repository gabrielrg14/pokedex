import { render, screen } from "@testing-library/react"

import StatBar from "."

describe("<StatBar />", () => {
    it("should render StatBar with parent-bar and child-bar divs", () => {
        render(<StatBar type="grass" stat="special-attack" baseStat={100} />)

        expect(screen.getByTestId("parent-bar")).toBeInTheDocument()
        expect(screen.getByTestId("parent-bar")).toBeVisible()
        expect(screen.getByTestId("child-bar")).toBeInTheDocument()
        expect(screen.getByTestId("child-bar")).toBeVisible()
    })
})
