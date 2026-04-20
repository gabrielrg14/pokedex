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
    })

    describe("getPokemonSpeciesByUrl", () => {
        it("should throw an error when name does not exist", async () => {
            await expect(
                pokedexService.getPokemonSpeciesByName("not-a-pokemon")
            ).rejects.toThrow()
        })

        it("should return an empty object when name is undefined", async () => {
            const speciesData =
                await pokedexService.getPokemonSpeciesByName(undefined)
            expect(speciesData).toStrictEqual({})
        })

        it.each(pokemonMocks.pokemonSpeciesArrayList)(
            "should return data for the %s species",
            async (name, species) => {
                const speciesData =
                    await pokedexService.getPokemonSpeciesByName(name as string)
                expect(speciesData).toStrictEqual(species)
            }
        )
    })

    describe("getPokemonsWithPagination", () => {
        it("should return the pokemon list", async () => {
            const pokemonList =
                await pokedexService.getPokemonsWithPagination(12)
            expect(pokemonList).toStrictEqual(pokemonMocks.list)
        })

        it.each(pokemonMocks.pokemonArrayList)(
            "should return %s data in the list",
            async (name, pokemon) => {
                const pokemonList =
                    await pokedexService.getPokemonsWithPagination(12)
                expect(pokemonList).toContainEqual(pokemon)
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
                const types = await pokedexService.getAllTypes()
                expect(types).toContainEqual(type)
            }
        )
    })

    describe("getPokemonsByType", () => {
        it("should throw an error when the searched type does not exist", async () => {
            await expect(
                pokedexService.getPokemonsByType("not-a-type")
            ).rejects.toThrow()
        })

        it.each(typeMocks.pokemonsByTypeArray)(
            "should return a list of pokemons from type %s",
            async (name, pokemon) => {
                const pokemonList = await pokedexService.getPokemonsByType(
                    name as string
                )
                expect(pokemonList).toContainEqual(pokemon)
            }
        )
    })
})
