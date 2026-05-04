import * as S from "./styles"
import { CardImage } from "./CardImage"
import { CardContent } from "./CardContent"

export const PsyduckCard = () => {
    return (
        <S.CardLink href="/pokemon/psyduck" aria-label="Psyduck">
            <S.CardBody>
                <CardImage />
                <CardContent />
            </S.CardBody>
        </S.CardLink>
    )
}
