import { NextSeo } from "next-seo"

import * as S from "./styles"
import Link from "next/link"
import { Button } from "components"

export const PageNotFoundTemplate = () => {
    return (
        <>
            <NextSeo title="404 | Page not found" />

            <S.Wrapper>
                <S.TextNotFound>Page or Pokémon not found!</S.TextNotFound>

                <S.TextNotHere>
                    Unfortunately the page you are looking for is not here.
                </S.TextNotHere>

                <S.PsyduckImage
                    src="/images/psyduck.png"
                    width={350}
                    height={200}
                    alt="Psyduck confused"
                    priority
                />

                <Link href="/" aria-label="Go to Home">
                    <Button>Go to Home</Button>
                </Link>
            </S.Wrapper>
        </>
    )
}
