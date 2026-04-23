import { formatName } from "."

describe("formatName", () => {
    it("should return an empty string when passing undefined", () => {
        expect(formatName(undefined)).toBe("")
    })

    describe("pokemon", () => {
        it("should return Bulbasaur when passing bulbasaur", () => {
            expect(formatName("bulbasaur")).toBe("Bulbasaur")
        })

        it("should return Kommo O when passing kommo-o", () => {
            expect(formatName("kommo-o")).toBe("Kommo O")
        })

        it("should return Charizard Mega X when passing charizard-mega-x", () => {
            expect(formatName("charizard-mega-x")).toBe("Charizard Mega X")
        })

        it("should return Zygarde 10 Power Construct when passing zygarde-10-power-construct", () => {
            expect(formatName("zygarde-10-power-construct")).toBe(
                "Zygarde 10 Power Construct"
            )
        })
    })

    describe("genera", () => {
        it("should return Quadruped when passing quadruped", () => {
            expect(formatName("quadruped")).toBe("Quadruped")
        })

        it("should return Bug Wings when passing bug-wings", () => {
            expect(formatName("bug-wings")).toBe("Bug Wings")
        })
    })

    describe("shape", () => {
        it("should return Quadruped when passing quadruped", () => {
            expect(formatName("quadruped")).toBe("Quadruped")
        })

        it("should return Bug Wings when passing bug-wings", () => {
            expect(formatName("bug-wings")).toBe("Bug Wings")
        })
    })

    describe("habitat", () => {
        it("should return Waters Edge when passing waters-edge", () => {
            expect(formatName("waters-edge")).toBe("Waters Edge")
        })

        it("should return Rough Terrain when passing rough-terrain", () => {
            expect(formatName("rough-terrain")).toBe("Rough Terrain")
        })
    })

    describe("ability", () => {
        it("should return Solar Power when passing solar-power", () => {
            expect(formatName("solar-power")).toBe("Solar Power")
        })

        it("should return Good As Gold when passing good-as-gold", () => {
            expect(formatName("good-as-gold")).toBe("Good As Gold")
        })
    })

    describe("stat", () => {
        it("should return Solar Power when passing solar-power", () => {
            expect(formatName("special-attack")).toBe("Sp. Attack")
        })

        it("should return Good As Gold when passing good-as-gold", () => {
            expect(formatName("special-defense")).toBe("Sp. Defense")
        })
    })
})
