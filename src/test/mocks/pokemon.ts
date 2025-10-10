import { IPokemon, IPokemonSpecies } from "interfaces"

const venusaur: IPokemon = {
    id: 3,
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
    abilities: [
        {
            ability: {
                name: "overgrow",
                url: "https://pokeapi.co/api/v2/ability/65/"
            }
        },
        {
            ability: {
                name: "chlorophyll",
                url: "https://pokeapi.co/api/v2/ability/34/"
            }
        }
    ],
    height: 20,
    weight: 1000,
    sprites: {
        front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png",
        back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
        back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png",
        other: {
            "official-artwork": {
                front_default:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
                front_shiny:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/3.png"
            }
        }
    },
    species: {
        name: "venusaur",
        url: "https://pokeapi.co/api/v2/pokemon-species/3/"
    },
    stats: [
        {
            base_stat: 80,
            stat: {
                name: "hp",
                url: "https://pokeapi.co/api/v2/stat/1/"
            }
        },
        {
            base_stat: 82,
            stat: {
                name: "attack",
                url: "https://pokeapi.co/api/v2/stat/2/"
            }
        },
        {
            base_stat: 83,
            stat: {
                name: "defense",
                url: "https://pokeapi.co/api/v2/stat/3/"
            }
        },
        {
            base_stat: 100,
            stat: {
                name: "special-attack",
                url: "https://pokeapi.co/api/v2/stat/4/"
            }
        },
        {
            base_stat: 100,
            stat: {
                name: "special-defense",
                url: "https://pokeapi.co/api/v2/stat/5/"
            }
        },
        {
            base_stat: 80,
            stat: {
                name: "speed",
                url: "https://pokeapi.co/api/v2/stat/6/"
            }
        }
    ],
    types: [
        {
            type: {
                name: "grass",
                url: "https://pokeapi.co/api/v2/type/12/"
            }
        },
        {
            type: {
                name: "poison",
                url: "https://pokeapi.co/api/v2/type/4/"
            }
        }
    ],
    cries: {
        latest: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/3.ogg",
        legacy: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/3.ogg"
    }
}

const venusaurSpecies: IPokemonSpecies = {
    genera: [
        {
            genus: "Seed Pokémon",
            language: {
                name: "en",
                url: "https://pokeapi.co/api/v2/language/9/"
            }
        }
    ],
    habitat: {
        name: "grassland",
        url: "https://pokeapi.co/api/v2/pokemon-habitat/3/"
    }
}

const charizard: IPokemon = {
    id: 6,
    name: "charizard",
    url: "https://pokeapi.co/api/v2/pokemon/6/",
    abilities: [
        {
            ability: {
                name: "blaze",
                url: "https://pokeapi.co/api/v2/ability/66/"
            }
        },
        {
            ability: {
                name: "solar-power",
                url: "https://pokeapi.co/api/v2/ability/94/"
            }
        }
    ],
    height: 17,
    weight: 905,
    sprites: {
        front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
        back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
        back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png",
        other: {
            "official-artwork": {
                front_default:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
                front_shiny:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/6.png"
            }
        }
    },
    species: {
        name: "charizard",
        url: "https://pokeapi.co/api/v2/pokemon-species/6/"
    },
    stats: [
        {
            base_stat: 78,
            stat: {
                name: "hp",
                url: "https://pokeapi.co/api/v2/stat/1/"
            }
        },
        {
            base_stat: 84,
            stat: {
                name: "attack",
                url: "https://pokeapi.co/api/v2/stat/2/"
            }
        },
        {
            base_stat: 78,
            stat: {
                name: "defense",
                url: "https://pokeapi.co/api/v2/stat/3/"
            }
        },
        {
            base_stat: 109,
            stat: {
                name: "special-attack",
                url: "https://pokeapi.co/api/v2/stat/4/"
            }
        },
        {
            base_stat: 85,
            stat: {
                name: "special-defense",
                url: "https://pokeapi.co/api/v2/stat/5/"
            }
        },
        {
            base_stat: 100,
            stat: {
                name: "speed",
                url: "https://pokeapi.co/api/v2/stat/6/"
            }
        }
    ],
    types: [
        {
            type: {
                name: "fire",
                url: "https://pokeapi.co/api/v2/type/10/"
            }
        },
        {
            type: {
                name: "flying",
                url: "https://pokeapi.co/api/v2/type/3/"
            }
        }
    ],
    cries: {
        latest: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/6.ogg",
        legacy: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/6.ogg"
    }
}

const charizardSpecies: IPokemonSpecies = {
    genera: [
        {
            genus: "Flame Pokémon",
            language: {
                name: "en",
                url: "https://pokeapi.co/api/v2/language/9/"
            }
        }
    ],
    habitat: {
        name: "mountain",
        url: "https://pokeapi.co/api/v2/pokemon-habitat/4/"
    }
}

const blastoise: IPokemon = {
    id: 9,
    name: "blastoise",
    url: "https://pokeapi.co/api/v2/pokemon/9/",
    abilities: [
        {
            ability: {
                name: "torrent",
                url: "https://pokeapi.co/api/v2/ability/67/"
            }
        },
        {
            ability: {
                name: "rain-dish",
                url: "https://pokeapi.co/api/v2/ability/44/"
            }
        }
    ],
    height: 16,
    weight: 855,
    sprites: {
        front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png",
        back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
        back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/9.png",
        other: {
            "official-artwork": {
                front_default:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
                front_shiny:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/9.png"
            }
        }
    },
    species: {
        name: "blastoise",
        url: "https://pokeapi.co/api/v2/pokemon-species/9/"
    },
    stats: [
        {
            base_stat: 79,
            stat: {
                name: "hp",
                url: "https://pokeapi.co/api/v2/stat/1/"
            }
        },
        {
            base_stat: 83,
            stat: {
                name: "attack",
                url: "https://pokeapi.co/api/v2/stat/2/"
            }
        },
        {
            base_stat: 100,
            stat: {
                name: "defense",
                url: "https://pokeapi.co/api/v2/stat/3/"
            }
        },
        {
            base_stat: 85,
            stat: {
                name: "special-attack",
                url: "https://pokeapi.co/api/v2/stat/4/"
            }
        },
        {
            base_stat: 105,
            stat: {
                name: "special-defense",
                url: "https://pokeapi.co/api/v2/stat/5/"
            }
        },
        {
            base_stat: 78,
            stat: {
                name: "speed",
                url: "https://pokeapi.co/api/v2/stat/6/"
            }
        }
    ],
    types: [
        {
            type: {
                name: "water",
                url: "https://pokeapi.co/api/v2/type/11/"
            }
        }
    ],
    cries: {
        latest: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/9.ogg",
        legacy: "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/9.ogg"
    }
}

const blastoiseSpecies: IPokemonSpecies = {
    genera: [
        {
            genus: "Shellfish Pokémon",
            language: {
                name: "en",
                url: "https://pokeapi.co/api/v2/language/9/"
            }
        }
    ],
    habitat: {
        name: "waters-edge",
        url: "https://pokeapi.co/api/v2/pokemon-habitat/9/"
    }
}

export const pokemonMocks = {
    venusaur,
    venusaurSpecies,
    charizard,
    charizardSpecies,
    blastoise,
    blastoiseSpecies,
    list: [venusaur, charizard, blastoise],
    pokemonArrayList: [
        [venusaur.name, venusaur],
        [charizard.name, charizard],
        [blastoise.name, blastoise]
    ],
    pokemonSpeciesArrayList: [
        [venusaur.species.name, venusaur.species.url, venusaurSpecies],
        [charizard.species.name, charizard.species.url, charizardSpecies],
        [blastoise.species.name, blastoise.species.url, blastoiseSpecies]
    ]
}
