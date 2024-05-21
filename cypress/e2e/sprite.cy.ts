/// <reference types="../support/commands.d.ts" />

describe("Pokémon sprite", () => {
    const srcDefaultSprite =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    const srcShinySprite =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"

    it("change the Pokémons sprite from default to shiny and from shiny to standard", () => {
        cy.intercept("GET", "**/pokemon/bulbasaur").as("getBulbasaur")

        cy.visit("/")
        cy.wait("@getBulbasaur")

        cy.get("main section img[alt='bulbasaur']")
            .should("be.visible")
            .as("bulbasaurSprite")
        cy.get("header nav ul li svg").should("be.visible").as("spriteSwitcher")

        cy.get("@bulbasaurSprite").should("have.attr", "src", srcDefaultSprite)
        cy.get("@spriteSwitcher").should("not.have.class", "shiny").click()

        cy.get("@bulbasaurSprite").should("have.attr", "src", srcShinySprite)
        cy.get("@spriteSwitcher").should("have.class", "shiny").click()

        cy.get("@bulbasaurSprite").should("have.attr", "src", srcDefaultSprite)
        cy.get("@spriteSwitcher").should("not.have.class", "shiny")
    })
})
