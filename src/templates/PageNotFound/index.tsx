import { NextSeo } from "next-seo"

import * as S from "./styles"
import { HomeButton, PsyduckCard } from "./sub-components"

export const PageNotFoundTemplate = () => {
    return (
        <>
            <NextSeo title="404 | Page not found" />

            <S.Container>
                <S.Section>
                    <PsyduckCard />
                    <HomeButton />
                </S.Section>
            </S.Container>
        </>
    )
}
