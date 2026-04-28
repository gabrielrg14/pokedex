import styled from "styled-components"
import { LoaderCircle } from "@styled-icons/boxicons-regular"

type SpinnerProps = {
    size: number
    color: string
}

export const Spinner = styled(LoaderCircle)<SpinnerProps>`
    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(180deg);
        }
    }

    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    color: ${(props) => props.color};
    animation: rotate 1s linear infinite;
`
