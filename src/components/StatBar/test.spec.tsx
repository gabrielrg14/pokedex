import { render, screen } from "@testing-library/react"
import { typeMocks } from "test/mocks"

import { StatBar } from "."

describe("<StatBar />", () => {
    it("should render StatBar with parent-bar and child-bar divs", () => {
        render(
            <StatBar type={typeMocks.normal.name} stat="hp" baseStat={255} />
        )

        expect(screen.getByTestId(/parent-bar/i)).toBeInTheDocument()
        expect(screen.getByTestId(/child-bar/i)).toBeInTheDocument()
    })

    it("should render the hp status child-bar of a flying type with correct background-color and width", async () => {
        render(<StatBar type={typeMocks.flying.name} stat="hp" baseStat={95} />)

        expect(screen.getByTestId(/child-bar/i)).toHaveStyle({
            "background-color": "#92AADE",
            width: "37.254901960784316%"
        })
    })

    it("should render the attack status child-bar of a psychic type with correct background-color and width", () => {
        render(
            <StatBar
                type={typeMocks.psychic.name}
                stat="attack"
                baseStat={50}
            />
        )

        expect(screen.getByTestId(/child-bar/i)).toHaveStyle({
            "background-color": "#F97176",
            width: "26.31578947368421%"
        })
    })

    it("should render the defense status child-bar of a bug type with correct background-color and width", () => {
        render(
            <StatBar type={typeMocks.bug.name} stat="defense" baseStat={230} />
        )

        expect(screen.getByTestId(/child-bar/i)).toHaveStyle({
            "background-color": "#90C12C",
            width: "92%"
        })
    })

    it("should render the special-attack status child-bar of a rock type with correct background-color and width", () => {
        render(
            <StatBar
                type={typeMocks.rock.name}
                stat="special-attack"
                baseStat={95}
            />
        )

        expect(screen.getByTestId(/child-bar/i)).toHaveStyle({
            "background-color": "#C7B78B",
            width: "48.96907216494845%"
        })
    })

    it("should render the special-defense status child-bar of a ghost type with correct background-color and width", () => {
        render(
            <StatBar
                type={typeMocks.ghost.name}
                stat="special-defense"
                baseStat={75}
            />
        )

        expect(screen.getByTestId(/child-bar/i)).toHaveStyle({
            "background-color": "#5269AC",
            width: "30%"
        })
    })

    it("should render the speed status child-bar of a dragon type with correct background-color and width", () => {
        render(
            <StatBar type={typeMocks.dragon.name} stat="speed" baseStat={80} />
        )

        expect(screen.getByTestId(/child-bar/i)).toHaveStyle({
            "background-color": "#096DC4",
            width: "40%"
        })
    })
})
