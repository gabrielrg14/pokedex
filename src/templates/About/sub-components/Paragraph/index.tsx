import * as S from "./styles"

type ParagraphProps = {
    text: string
}

export const Paragraph = ({ text }: ParagraphProps) => {
    return <S.Paragraph>{text}</S.Paragraph>
}
