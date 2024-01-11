import { API_URL } from "./"

describe("API_URL", () => {
    it("should be https://pokeapi.co/api/v2", () => {
        expect(API_URL).toBe("https://pokeapi.co/api/v2")
    })
})
