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

        cy.get("main section button[title='Open menu']")
            .should("be.visible")
            .should("not.have.class", "active")
            .as("spriteMenuButton")

        cy.get("main section button[title='Toggle sprite']").as(
            "spriteVersionButton"
        )
        cy.get("main section button[title='Toggle sprite'] svg")
            .should("not.have.class", "active")
            .as("spriteVersionIcon")

        cy.get("main section button[title='Toggle rotation']").as(
            "spriteRotationButton"
        )
        cy.get("main section button[title='Toggle rotation'] svg")
            .should("not.have.class", "active")
            .as("spriteRotationIcon")

        cy.get("main section button[title='Toggle shiny']").as(
            "spriteTypeButton"
        )
        cy.get("main section button[title='Toggle shiny'] svg")
            .should("not.have.class", "active")
            .as("spriteTypeIcon")
    })

    describe("Sprite version", () => {
        const officialVersionSprite =
            venusaurSprites.other["official-artwork"].front_default
        const pixelatedVersionSprite = venusaurSprites.front_default

        it("change the sprite version from official to pixelated and from pixelated to official", () => {
            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                officialVersionSprite
            )

            cy.get("@spriteMenuButton").click()
            cy.get("@spriteVersionButton").should("be.visible").click()

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                pixelatedVersionSprite
            )

            cy.get("@spriteVersionIcon").should("have.class", "active")
            cy.get("@spriteVersionButton").click()

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                officialVersionSprite
            )
            cy.get("@spriteVersionIcon").should("not.have.class", "active")
        })
    })

    describe("Sprite rotation", () => {
        const frontPositionSprite = venusaurSprites.front_default
        const backPositionSprite = venusaurSprites.back_default

        it("change the sprite version to pixelated and the sprite rotation from front to back and from back to front", () => {
            cy.get("@spriteMenuButton").click()
            cy.get("@spriteVersionButton").should("be.visible").click()

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                frontPositionSprite
            )
            cy.get("@spriteRotationButton").should("be.visible").click()

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                backPositionSprite
            )
            cy.get("@spriteRotationIcon").should("have.class", "active")
            cy.get("@spriteRotationButton").click()

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                frontPositionSprite
            )
            cy.get("@spriteRotationIcon").should("not.have.class", "active")
        })

        it("disables the sprite rotation option when the sprite version is official", () => {
            cy.get("@spriteMenuButton").click()

            cy.get("@spriteRotationButton")
                .should("be.visible")
                .should("have.class", "disabled")
            cy.get("@spriteVersionButton").should("be.visible").click()

            cy.get("@spriteRotationButton")
                .should("not.have.class", "disabled")
                .click()
            cy.get("@spriteVersionButton").click()

            cy.get("@spriteRotationButton").should("have.class", "disabled")
        })
    })

    describe("Sprite type", () => {
        const defaultTypeSprite =
            venusaurSprites.other["official-artwork"].front_default
        const shinyTypeSprite =
            venusaurSprites.other["official-artwork"].front_shiny

        it("change the sprite type from default to shiny and from shiny to default", () => {
            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                defaultTypeSprite
            )

            cy.get("@spriteMenuButton").click()
            cy.get("@spriteTypeButton").should("be.visible").click()

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                shinyTypeSprite
            )
            cy.get("@spriteTypeIcon").should("have.class", "active")
            cy.get("@spriteTypeButton").click()

            cy.get("@venusaurSprite").should(
                "have.attr",
                "src",
                defaultTypeSprite
            )
            cy.get("@spriteTypeIcon").should("not.have.class", "active")
        })
    })
})
