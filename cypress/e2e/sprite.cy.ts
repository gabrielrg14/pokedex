/// <reference types="../support/commands.d.ts" />

describe("Pokémon sprite", () => {
    describe("Sprite version", () => {
        const srcOfficialSpriteVersion =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        const srcPixelatedSpriteVersion =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"

        it("change the sprite version from official to pixelated and from pixelated to official", () => {
            cy.intercept("GET", "**/pokemon/bulbasaur").as("getBulbasaur")

            cy.visit("/")
            cy.wait("@getBulbasaur")

            cy.get("main section ul li img[alt='Bulbasaur']")
                .should("be.visible")
                .as("bulbasaurSprite")

            cy.get("header nav ul li:nth-child(1) svg")
                .should("be.visible")
                .as("spriteVersionSwitcher")

            cy.get("@bulbasaurSprite").should(
                "have.attr",
                "src",
                srcOfficialSpriteVersion
            )
            cy.get("@spriteVersionSwitcher")
                .should("not.have.class", "active")
                .click()

            cy.get("@bulbasaurSprite").should(
                "have.attr",
                "src",
                srcPixelatedSpriteVersion
            )
            cy.get("@spriteVersionSwitcher")
                .should("have.class", "active")
                .click()

            cy.get("@bulbasaurSprite").should(
                "have.attr",
                "src",
                srcOfficialSpriteVersion
            )
            cy.get("@spriteVersionSwitcher").should("not.have.class", "active")
        })
    })

    describe("Sprite type", () => {
        const srcDefaultSpriteType =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        const srcShinySpriteType =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png"

        it("change the sprite type from default to shiny and from shiny to default", () => {
            cy.intercept("GET", "**/pokemon/bulbasaur").as("getBulbasaur")

            cy.visit("/")
            cy.wait("@getBulbasaur")

            cy.get("main section ul li img[alt='Bulbasaur']")
                .should("be.visible")
                .as("bulbasaurSprite")

            cy.get("header nav ul li:nth-child(2) svg")
                .should("be.visible")
                .as("spriteTypeSwitcher")

            cy.get("@bulbasaurSprite").should(
                "have.attr",
                "src",
                srcDefaultSpriteType
            )
            cy.get("@spriteTypeSwitcher")
                .should("not.have.class", "active")
                .click()

            cy.get("@bulbasaurSprite").should(
                "have.attr",
                "src",
                srcShinySpriteType
            )
            cy.get("@spriteTypeSwitcher").should("have.class", "active").click()

            cy.get("@bulbasaurSprite").should(
                "have.attr",
                "src",
                srcDefaultSpriteType
            )
            cy.get("@spriteTypeSwitcher").should("not.have.class", "active")
        })
    })
})
