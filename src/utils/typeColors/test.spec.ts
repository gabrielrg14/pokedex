import { typeMocks } from "test/mocks"

import { getColorsByType } from "."

describe("pokemonType", () => {
    describe("getColorsByType", () => {
        it("should return the correct normal type colors", () => {
            const props = getColorsByType(typeMocks.types.normal.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #9099A1 50%, #9099A1 50%)"
            )
            expect(props.backgroundColor).toEqual("#9099A1")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct fire type colors", () => {
            const props = getColorsByType(typeMocks.types.fire.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #FF9C54 50%, #FF9C54 50%)"
            )
            expect(props.backgroundColor).toEqual("#FF9C54")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct water type colors", () => {
            const props = getColorsByType(typeMocks.types.water.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #4D90D5 50%, #4D90D5 50%)"
            )
            expect(props.backgroundColor).toEqual("#4D90D5")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct electric type colors", () => {
            const props = getColorsByType(typeMocks.types.electric.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #F3D23B 50%, #F3D23B 50%)"
            )
            expect(props.backgroundColor).toEqual("#F3D23B")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct grass type colors", () => {
            const props = getColorsByType(typeMocks.types.grass.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #63BB5B 50%, #63BB5B 50%)"
            )
            expect(props.backgroundColor).toEqual("#63BB5B")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct ice type colors", () => {
            const props = getColorsByType(typeMocks.types.ice.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #74CEC0 50%, #74CEC0 50%)"
            )
            expect(props.backgroundColor).toEqual("#74CEC0")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct fighting type colors", () => {
            const props = getColorsByType(typeMocks.types.fighting.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #CE4069 50%, #CE4069 50%)"
            )
            expect(props.backgroundColor).toEqual("#CE4069")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct poison type colors", () => {
            const props = getColorsByType(typeMocks.types.poison.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #AB6AC8 50%, #AB6AC8 50%)"
            )
            expect(props.backgroundColor).toEqual("#AB6AC8")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct ground type colors", () => {
            const props = getColorsByType(typeMocks.types.ground.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #D97746 50%, #D97746 50%)"
            )
            expect(props.backgroundColor).toEqual("#D97746")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct flying type colors", () => {
            const props = getColorsByType(typeMocks.types.flying.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #92AADE 50%, #92AADE 50%)"
            )
            expect(props.backgroundColor).toEqual("#92AADE")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct psychic type colors", () => {
            const props = getColorsByType(typeMocks.types.psychic.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #F97176 50%, #F97176 50%)"
            )
            expect(props.backgroundColor).toEqual("#F97176")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct bug type colors", () => {
            const props = getColorsByType(typeMocks.types.bug.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #90C12C 50%, #90C12C 50%)"
            )
            expect(props.backgroundColor).toEqual("#90C12C")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct rock type colors", () => {
            const props = getColorsByType(typeMocks.types.rock.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #C7B78B 50%, #C7B78B 50%)"
            )
            expect(props.backgroundColor).toEqual("#C7B78B")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct ghost type colors", () => {
            const props = getColorsByType(typeMocks.types.ghost.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #5269AC 50%, #5269AC 50%)"
            )
            expect(props.backgroundColor).toEqual("#5269AC")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct dragon type colors", () => {
            const props = getColorsByType(typeMocks.types.dragon.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #096DC4 50%, #096DC4 50%)"
            )
            expect(props.backgroundColor).toEqual("#096DC4")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct dark type colors", () => {
            const props = getColorsByType(typeMocks.types.dark.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #5A5366 50%, #5A5366 50%)"
            )
            expect(props.backgroundColor).toEqual("#5A5366")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct steel type colors", () => {
            const props = getColorsByType(typeMocks.types.steel.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #5A8EA1 50%, #5A8EA1 50%)"
            )
            expect(props.backgroundColor).toEqual("#5A8EA1")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct fairy type colors", () => {
            const props = getColorsByType(typeMocks.types.fairy.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #EC8FE6 50%, #EC8FE6 50%)"
            )
            expect(props.backgroundColor).toEqual("#EC8FE6")
            expect(props.color).toEqual("#FFF")
        })

        it("should return the correct default type colors", () => {
            const props = getColorsByType(typeMocks.typeAll.name)

            expect(props.background).toEqual(
                "linear-gradient(180deg, #000 50%, #000 50%)"
            )
            expect(props.backgroundColor).toEqual("#000")
            expect(props.color).toEqual("#FFF")
        })
    })
})
