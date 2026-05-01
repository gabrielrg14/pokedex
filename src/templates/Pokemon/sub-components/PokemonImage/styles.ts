import styled from "styled-components"
import NextImage from "next/image"

type ImageProps = {
    imageRendering?: string
}

export const Wrapper = styled.div`
    text-align: center;
`

export const Image = styled(NextImage)<ImageProps>`
    image-rendering: ${(props) => props.imageRendering || "unset"};
`
