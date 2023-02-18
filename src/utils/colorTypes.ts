export function getColorsByPokemonType(type: string) {
    switch(type) {
        case "normal":
            return {
                background: "linear-gradient(180deg, #9099A1 50%, #9099A1 50%)",
                backgroundColor: "#9099A1",
                color: "#FFF"
            };

        case "fire":
            return {
                background: "linear-gradient(180deg, #FF9C54 50%, #FF9C54 50%)",
                backgroundColor: "#FF9C54",
                color: "#FFF"
            };

        case "water":
            return {
                background: "linear-gradient(180deg, #4D90D5 50%, #4D90D5 50%)",
                backgroundColor: "#4D90D5",
                color: "#FFF"
            };

        case "electric":
            return {
                background: "linear-gradient(180deg, #F3D23B 50%, #F3D23B 50%)",
                backgroundColor: "#F3D23B",
                color: "#FFF"
            };

        case "grass":
            return {
                background: "linear-gradient(180deg, #63BB5B 50%, #63BB5B 50%)",
                backgroundColor: "#63BB5B",
                color: "#FFF"
            };

        case "ice":
            return {
                background: "linear-gradient(180deg, #74CEC0 50%, #74CEC0 50%)",
                backgroundColor: "#74CEC0",
                color: "#FFF"
            };

        case "fighting":
            return {
                background: "linear-gradient(180deg, #CE4069 50%, #CE4069 50%)",
                backgroundColor: "#CE4069",
                color: "#FFF"
            };

        case "poison":
            return {
                background: "linear-gradient(180deg, #AB6AC8 50%, #AB6AC8 50%)",
                backgroundColor: "#AB6AC8",
                color: "#FFF"
            };

        case "ground":
            return {
                background: "linear-gradient(180deg, #D97746 50%, #D97746 50%)",
                backgroundColor: "#D97746",
                color: "#FFF"
            };

        case "flying":
            return {
                background: "linear-gradient(180deg, #92AADE 50%, #92AADE 50%)",
                backgroundColor: "#92AADE",
                color: "#FFF"
            };

        case "psychic":
            return {
                background: "linear-gradient(180deg, #F97176 50%, #F97176 50%)",
                backgroundColor: "#F97176",
                color: "#FFF"
            };

        case "bug":
            return {
                background: "linear-gradient(180deg, #90C12C 50%, #90C12C 50%)",
                backgroundColor: "#90C12C",
                color: "#FFF"
            };

        case "rock":
            return {
                background: "linear-gradient(180deg, #C7B78B 50%, #C7B78B 50%)",
                backgroundColor: "#C7B78B",
                color: "#FFF"
            };

        case "ghost":
            return {
                background: "linear-gradient(180deg, #5269AC 50%, #5269AC 50%)",
                backgroundColor: "#5269AC",
                color: "#FFF"
            };

        case "dragon":
            return {
                background: "linear-gradient(180deg, #096DC4 50%, #096DC4 50%)",
                backgroundColor: "#096DC4",
                color: "#FFF"
            };

        case "dark":
            return {
                background: "linear-gradient(180deg, #5A5366 50%, #5A5366 50%)",
                backgroundColor: "#5A5366",
                color: "#FFF"
            };

        case "steel":
            return {
                background: "linear-gradient(180deg, #5A8EA1 50%, #5A8EA1 50%)",
                backgroundColor: "#5A8EA1",
                color: "#FFF"
            };

        case "fairy":
            return {
                background: "linear-gradient(180deg, #EC8FE6 50%, #EC8FE6 50%)",
                backgroundColor: "#EC8FE6",
                color: "#FFF"
            };

        default:
            return {
                background: "linear-gradient(180deg, #9099A1 50%, #9099A1 50%)",
                backgroundColor: "#9099A1",
                color: "#FFF"
            };
    }
}