import { generateMedia } from "styled-media-query"

export const mediaQueries = generateMedia({
    mobile: "576px",
    tablet: "768px",
    desktop: "1200px",
    largeDesktop: "1400px"
})
