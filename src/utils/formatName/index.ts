export const formatName = (name: string = "") => {
    // Removes hyphen from pokémon name and puts a blank in its place
    return (
        name
            .replace("special-", "Sp. ")
            .replace(/-/g, " ")
            // Capitalize the first letter of each word that makes name
            .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
    )
}
