import { formatName } from "."

describe("pokemonName", () => {
    describe("formatName", () => {
        it("should return an empty string when passing undefined", () => {
            expect(formatName(undefined)).toBe("")
        })

        it("should return Bulbasaur formatted when passing bulbasaur", () => {
            expect(formatName("bulbasaur")).toBe("Bulbasaur")
        })

        it("should return Kommo O formatted when passing kommo-o", () => {
            expect(formatName("kommo-o")).toBe("Kommo O")
        })

        it("should return Charizard Mega X formatted when passing charizard-mega-x", () => {
            expect(formatName("charizard-mega-x")).toBe("Charizard Mega X")
        })

        it("should return Zygarde 10 Power Construct formatted when passing zygarde-10-power-construct", () => {
            expect(formatName("zygarde-10-power-construct")).toBe(
                "Zygarde 10 Power Construct"
            )
        })

        it("should return Solar Power formatted when passing solar-power", () => {
            expect(formatName("solar-power")).toBe("Solar Power")
        })

        it("should return Good As Gold formatted when passing good-as-gold", () => {
            expect(formatName("good-as-gold")).toBe("Good As Gold")
        })
    })
})
