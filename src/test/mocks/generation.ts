import { IGeneration } from "interfaces"

const gen_i: IGeneration = {
    name: "generation-i",
    url: "https://pokeapi.co/api/v2/generation/1/"
}

const gen_ii: IGeneration = {
    name: "generation-ii",
    url: "https://pokeapi.co/api/v2/generation/2/"
}

const gen_iii: IGeneration = {
    name: "generation-iii",
    url: "https://pokeapi.co/api/v2/generation/3/"
}

const gen_iv: IGeneration = {
    name: "generation-iv",
    url: "https://pokeapi.co/api/v2/generation/4/"
}
const gen_v: IGeneration = {
    name: "generation-v",
    url: "https://pokeapi.co/api/v2/generation/5/"
}

const gen_vi: IGeneration = {
    name: "generation-vi",
    url: "https://pokeapi.co/api/v2/generation/6/"
}

const gen_vii: IGeneration = {
    name: "generation-vii",
    url: "https://pokeapi.co/api/v2/generation/7/"
}

const gen_viii: IGeneration = {
    name: "generation-viii",
    url: "https://pokeapi.co/api/v2/generation/8/"
}

const gen_ix: IGeneration = {
    name: "generation-ix",
    url: "https://pokeapi.co/api/v2/generation/9/"
}

export const generationMocks = {
    gen_i,
    gen_ii,
    gen_iii,
    gen_iv,
    gen_v,
    gen_vi,
    gen_vii,
    gen_viii,
    gen_ix,
    list: [
        gen_i,
        gen_ii,
        gen_iii,
        gen_iv,
        gen_v,
        gen_vi,
        gen_vii,
        gen_viii,
        gen_ix
    ],
    generationArrayList: [
        [gen_i.name, "Kanto"],
        [gen_ii.name, "Johto"],
        [gen_iii.name, "Hoenn"],
        [gen_iv.name, "Sinnoh"],
        [gen_v.name, "Unova"],
        [gen_vi.name, "Kalos"],
        [gen_vii.name, "Alola"],
        [gen_viii.name, "Galar"],
        [gen_ix.name, "Paldea"]
    ]
}
