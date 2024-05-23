/// <reference types="../support/commands.d.ts" />

describe("Search for Pokémon", () => {
    beforeEach(() => {
        cy.intercept("GET", "**/pokemon/butterfree").as("getButterfree")

        cy.visit("/")
        cy.wait("@getButterfree")
    })

    it("search for Pokémon 'butterfree' in the initial list", () => {
        cy.navigateToPokemonPage("butterfree")
        cy.validatePokemonPage("Butterfree", "butterfree", "#0012", [
            "bug",
            "flying"
        ])
    })

    it("search for Pokémon 'pikachu' using pagination", () => {
        cy.intercept("GET", "**/pokemon/arbok").as("getArbok")
        cy.intercept("GET", "**/pokemon/pikachu").as("getPikachu")

        cy.contains("main section button", "Load more Pokémon")
            .as("loadButton")
            .click()
        cy.wait("@getArbok")

        cy.get("@loadButton").click()
        cy.wait("@getPikachu")

        cy.navigateToPokemonPage("pikachu")
        cy.validatePokemonPage("Pikachu", "pikachu", "#0025", ["electric"])
    })

    it("search for Pokémon 'sceptile' using search", () => {
        cy.searchForPokemon("sceptile")
        cy.navigateToPokemonPage("sceptile")
        cy.validatePokemonPage("Sceptile", "sceptile", "#0254", ["grass"])
    })

    it("search for Pokémon '115' using search", () => {
        cy.searchForPokemon("115")
        cy.navigateToPokemonPage("kangaskhan")
        cy.validatePokemonPage("Kangaskhan", "kangaskhan", "#0115", ["normal"])
    })

    it("search for Pokémon 'kyurem' using filter by type 'ice'", () => {
        cy.intercept("GET", "**/pokemon/kyurem").as("getKyurem")

        cy.contains("main section ul li button", "ice")
            .should("be.visible")
            .click()
        cy.wait("@getKyurem")

        cy.navigateToPokemonPage("kyurem")
        cy.validatePokemonPage("Kyurem", "kyurem", "#0646", ["dragon", "ice"])
    })

    it("search for the non-existent Pokémon 'test' using the search and return to the list", () => {
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
