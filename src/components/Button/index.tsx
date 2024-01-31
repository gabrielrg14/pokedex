import * as S from "./styles"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
}

export const Button = ({ children, ...rest }: ButtonProps) => {
    return <S.Button {...rest}>{children}</S.Button>
}
