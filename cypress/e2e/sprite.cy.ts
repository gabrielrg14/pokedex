/// <reference types="../support/commands.d.ts" />

import { pokemonMocks } from "test/mocks"
import { formatName } from "utils"

describe("Pokémon sprite", () => {
    const venusaurName = pokemonMocks.venusaur.name
    const venusaurNameFormatted = formatName(venusaurName)
    const venusaurSprites = pokemonMocks.venusaur.sprites

    beforeEach(() => {
        cy.intercept("GET", `**/pokemon/${venusaurName}`).as("getVenusaur")

        cy.visit("/")
        cy.wait("@getVenusaur")

        cy.get(`main section ul li img[alt='${venusaurNameFormatted}']`)
            .should("be.visible")
            .as("venusaurSprite")
    })

    describe("Sprite version", () => {
        const officialVersionSprite =
            venusaurSprites.other["official-artwork"].front_default
        const pixelatedVersionSprite = venusaurSprites.front_default

        it("change the sprite version from official to pixelated and from pixelated to official", () => {
            cy.get("header nav ul li:nth-child(1) svg")
                .should("be.visible")
                .as("spriteVersionSwitcher")

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                officialVersionSprite
            )
            cy.get("@spriteVersionSwitcher")
                .should("not.have.class", "active")
                .click()

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                pixelatedVersionSprite
            )
            cy.get("@spriteVersionSwitcher")
                .should("have.class", "active")
                .click()

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                officialVersionSprite
            )
            cy.get("@spriteVersionSwitcher").should("not.have.class", "active")
        })
    })

    describe("Sprite position", () => {
        const frontPositionSprite = venusaurSprites.front_default
        const backPositionSprite = venusaurSprites.back_default

        it("change the sprite version to pixelated and the sprite position from front to back and from back to front", () => {
            cy.get("header nav ul li:nth-child(1) svg").click()

            cy.get("header nav ul li:nth-child(2) svg")
                .should("be.visible")
                .as("spritePositionSwitcher")

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                frontPositionSprite
            )
            cy.get("@spritePositionSwitcher")
                .should("not.have.class", "active")
                .click()

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                backPositionSprite
            )
            cy.get("@spritePositionSwitcher")
                .should("have.class", "active")
                .click()

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                frontPositionSprite
            )
            cy.get("@spritePositionSwitcher").should("not.have.class", "active")
        })
    })

    describe("Sprite type", () => {
        const defaultTypeSprite =
            venusaurSprites.other["official-artwork"].front_default
        const shinyTypeSprite =
            venusaurSprites.other["official-artwork"].front_shiny

        it("change the sprite type from default to shiny and from shiny to default", () => {
            cy.get("header nav ul li:nth-child(3) svg")
                .should("be.visible")
                .as("spriteTypeSwitcher")

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                defaultTypeSprite
            )
            cy.get("@spriteTypeSwitcher")
                .should("not.have.class", "active")
                .click()

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                shinyTypeSprite
            )
            cy.get("@spriteTypeSwitcher").should("have.class", "active").click()

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                defaultTypeSprite
            )
            cy.get("@spriteTypeSwitcher").should("not.have.class", "active")
        })
    })
})
