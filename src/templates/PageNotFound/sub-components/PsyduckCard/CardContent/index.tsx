import * as S from "./styles"
import { RowTypes } from "components"
import { ErrorInfos } from "./ErrorInfos"

export const CardContent = () => {
    return (
        <S.Wrapper>
            <ErrorInfos />
            <RowTypes
                types={[
                    {
                        type: {
                            name: "error",
                            url: ""
                        }
                    }
                ]}
            />
        </S.Wrapper>
    )
}
