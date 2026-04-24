export function getGenerationRegion(generation: string) {
    switch (generation) {
        case "generation-i":
            return "Kanto"

        case "generation-ii":
            return "Johto"

        case "generation-iii":
            return "Hoenn"

        case "generation-iv":
            return "Sinnoh"

        case "generation-v":
            return "Unova"

        case "generation-vi":
            return "Kalos"

        case "generation-vii":
            return "Alola"

        case "generation-viii":
            return "Galar"

        case "generation-ix":
            return "Paldea"

        default:
            return "New"
    }
}
