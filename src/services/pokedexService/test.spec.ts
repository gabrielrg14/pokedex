import { pokemonMocks, typeMocks } from "test/mocks"

import { pokedexService } from "."

describe("pokedexService", () => {
    describe("getPokemonByQuery", () => {
        it("should throw an error when the searched pokemon does not exist", async () => {
            await expect(
                pokedexService.getPokemonByQuery("not-a-pokemon")
            ).rejects.toThrow()
        })

        it("should not return duplicate abilities in pokemon data", async () => {
            const pokemonData = await pokedexService.getPokemonByQuery(
                pokemonMocks.venusaur.name
            )

            expect(pokemonData).not.toStrictEqual({
                ...pokemonMocks.venusaur,
                abilities: [
                    ...pokemonMocks.venusaur.abilities,
                    pokemonMocks.venusaur.abilities[0]
                ]
            })
        })

        it.each(pokemonMocks.pokemonArrayList)(
            "should return %s data",
            async (name, pokemon) => {
                expect(
                    await pokedexService.getPokemonByQuery(name as string)
                ).toStrictEqual(pokemon)
            }
        )
    })

    describe("getPokemonSpeciesByName", () => {
        it("should throw an error when species name does not exist", async () => {
            await expect(
                pokedexService.getPokemonSpeciesByName("not-a-species")
            ).rejects.toThrow()
        })

        it("should return an empty object when species name is undefined", async () => {
            expect(
                await pokedexService.getPokemonSpeciesByName(undefined)
            ).toStrictEqual({})
        })

        it.each(pokemonMocks.pokemonSpeciesArrayList)(
            "should return data for the %s species",
            async (name, species) => {
                expect(
                    await pokedexService.getPokemonSpeciesByName(name as string)
                ).toStrictEqual(species)
            }
        )
    })

    describe("getPokemonWithPagination", () => {
        it("should return the pokemon list", async () => {
            expect(
                await pokedexService.getPokemonWithPagination(12)
            ).toStrictEqual(pokemonMocks.list)
        })

        it.each(pokemonMocks.pokemonArrayList)(
            "should return %s data in the list",
            async (name, pokemon) => {
                expect(
                    await pokedexService.getPokemonWithPagination()
                ).toContainEqual(pokemon)
            }
        )
    })

    describe("getPokemonByType", () => {
        it("should throw an error when the searched type does not exist", async () => {
            await expect(
                pokedexService.getPokemonByType("not-a-type")
            ).rejects.toThrow()
        })

        it.each(typeMocks.pokemonsByTypeArray)(
            "should return a list of pokemons from type %s",
            async (name, pokemon) => {
                expect(
                    await pokedexService.getPokemonByType(name as string)
                ).toContainEqual(pokemon)
            }
        )
    })

    describe("getAllTypes", () => {
        it("should return a list of 19 types, including type all", async () => {
            const types = await pokedexService.getAllTypes()

            expect(types).toHaveLength(19)
            expect(types).toContainEqual(typeMocks.typeAll)
            expect(types).toStrictEqual([typeMocks.typeAll, ...typeMocks.list])
        })

        it.each(typeMocks.arrayList)(
            "should contain the type %s in the list",
            async (name, type) => {
                expect(await pokedexService.getAllTypes()).toContainEqual(type)
            }
        )
    })
})
