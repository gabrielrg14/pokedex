import * as S from "./styles"
import { Genera as IGenera } from "interfaces"
import { formatName } from "utils"

type GeneraProps = {
    genera?: IGenera[]
}

export const Genera = ({ genera }: GeneraProps) => {
    if (!genera || !genera.length) return null

    return (
        <S.Genera>
            {formatName(
                genera.find((genera) => genera.language.name === "en")?.genus
            )}
        </S.Genera>
    )
}
