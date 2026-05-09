/// <reference types="../support/commands.d.ts" />

describe("Search for pokemon", () => {
    beforeEach(() => {
        cy.intercept("GET", "**/pokemon/butterfree").as("getButterfree")

        cy.visit("/")
        cy.wait("@getButterfree")
    })

    it("search for pokemon 'butterfree' in the initial list", () => {
        cy.navigateToPokemonPage("Butterfree")
        cy.validatePokemonPage("Butterfree", "#0012", ["Bug", "Flying"])
    })

    it("search for pokemon 'pikachu' using pagination", () => {
        cy.intercept("GET", "**/pokemon/arbok").as("getArbok")
        cy.intercept("GET", "**/pokemon/pikachu").as("getPikachu")

        cy.contains("main section button", "Load more Pokémon")
            .as("loadButton")
            .click()
        cy.wait("@getArbok")

        cy.get("@loadButton").click()
        cy.wait("@getPikachu")

        cy.navigateToPokemonPage("Pikachu")
        cy.validatePokemonPage("Pikachu", "#0025", ["Electric"])
    })

    it("search for pokemon 'sceptile' using search", () => {
        cy.searchForPokemon("sceptile")
        cy.navigateToPokemonPage("Sceptile")
        cy.validatePokemonPage("Sceptile", "#0254", ["Grass"])
    })

    it("search for pokemon '115' using search", () => {
        cy.searchForPokemon("115")
        cy.navigateToPokemonPage("Kangaskhan")
        cy.validatePokemonPage("Kangaskhan", "#0115", ["Normal"])
    })

    it("search for pokemon 'kyurem' using filter by type 'ice'", () => {
        cy.intercept("GET", "**/pokemon/kyurem").as("getKyurem")

        cy.contains("main section ul li button", "Ice").click()
        cy.wait("@getKyurem")

        cy.navigateToPokemonPage("Kyurem")
        cy.validatePokemonPage("Kyurem", "#0646", ["Dragon", "Ice"])
    })

    it("search for the non-existent pokemon 'test' using the search and return to the list", () => {
        cy.searchForPokemon("test")

        cy.contains("main section p", 'Pokémon "test" not found!').should(
            "be.visible"
        )
        cy.contains("main section button", "Back to list")
            .should("be.visible")
            .click()

        cy.contains("main section ul li h2", "Bulbasaur").should("be.visible")
    })
})
