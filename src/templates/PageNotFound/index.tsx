import { NextSeo } from "next-seo"

import * as S from "./styles"
import Link from "next/link"
import { Button, PokemonNumber, RowTypes } from "components"

export const PageNotFoundTemplate = () => {
    return (
        <>
            <NextSeo title="404 | Page not found" />

            <S.Wrapper>
                <S.Content>
                    <S.CardLink href="/pokemon/psyduck" aria-label="Psyduck">
                        <S.CardBody>
                            <S.PsyduckImage
                                src="/images/psyduck.png"
                                width={256}
                                height={256}
                                alt="Psyduck confused"
                                priority
                            />

                            <S.CardBottom>
                                <S.ErrorInfos>
                                    <PokemonNumber number={404} />
                                    <S.TextNotFound>Not Found</S.TextNotFound>
                                </S.ErrorInfos>

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
                            </S.CardBottom>
                        </S.CardBody>
                    </S.CardLink>

                    <Link href="/" aria-label="Go to Home">
                        <Button>Go to Home</Button>
                    </Link>
                </S.Content>
            </S.Wrapper>
        </>
    )
}
