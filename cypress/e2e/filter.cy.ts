/// <reference types="../support/commands.d.ts" />

describe("Filter Pokémon list", () => {
    beforeEach(() => {
        cy.intercept("GET", "**/pokemon/butterfree").as("getButterfree")

        cy.visit("/")
        cy.wait("@getButterfree")
    })

    it("filter by 'goodra' using search, navigate to its page, return to the list with the filtered search and navigate to its page again", () => {
        cy.intercept("GET", "**/pokemon/goodra").as("getGoodra")

        cy.searchForPokemon("goodra")
        cy.navigateToPokemonPage("Goodra")
        cy.validatePokemonPage("Goodra", "#0706", ["Dragon"])

        cy.get("header nav img[alt='Pokédex logo']")
            .should("be.visible")
            .click()
        cy.wait("@getGoodra")

        cy.navigateToPokemonPage("Goodra")
        cy.validatePokemonPage("Goodra", "#0706", ["Dragon"])
    })

    it("filter 'nidoqueen' by pagination, navigate to its page, return to the paginated list, find 'nidoking' and navigate to its page", () => {
        cy.intercept("GET", "**/pokemon/arbok").as("getArbok")
        cy.intercept("GET", "**/pokemon/nidoqueen").as("getNidoqueen")
        cy.intercept("GET", "**/pokemon/nidoking").as("getNidoking")

        cy.contains("main section button", "Load more Pokémon")
            .as("loadButton")
            .click()
        cy.wait("@getArbok")

        cy.get("@loadButton").click()
        cy.wait("@getNidoqueen")

        cy.navigateToPokemonPage("Nidoqueen")
        cy.validatePokemonPage("Nidoqueen", "#0031", ["Poison", "Ground"])

        cy.get("header nav img[alt='Pokédex logo']")
            .should("be.visible")
            .click()
        cy.wait("@getNidoking")

        cy.navigateToPokemonPage("Nidoking")
        cy.validatePokemonPage("Nidoking", "#0034", ["Poison", "Ground"])
    })

    it("filter by type 'fire', find 'charizard' and navigate to its page, go back to the filtered list, find 'skeledirge' and navigate to its page", () => {
        cy.intercept("GET", "**/pokemon/charizard").as("getCharizard")
        cy.intercept("GET", "**/pokemon/skeledirge").as("getSkeledirge")

        cy.contains("main section ul li button", "Fire").click()
        cy.wait("@getCharizard")

        cy.navigateToPokemonPage("Charizard")
        cy.validatePokemonPage("Charizard", "#0006", ["Fire", "Flying"])

        cy.get("header nav img[alt='Pokédex logo']")
            .should("be.visible")
            .click()
        cy.wait("@getSkeledirge")

        cy.navigateToPokemonPage("Skeledirge")
        cy.validatePokemonPage("Skeledirge", "#0911", ["Fire", "Ghost"])
    })
})
