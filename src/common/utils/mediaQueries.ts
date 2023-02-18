import { generateMedia } from "styled-media-query";

const mediaQueries = generateMedia({
    smallMobile: "375px",
    mobile: "480px",
    tablet: "768px",
    desktop: "1280px",
    largeDesktop: "1920px",
});

export default mediaQueries;