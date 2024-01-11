import { NextSeo } from "next-seo"

import * as S from "./styles"

export const AboutTemplate = () => {
    return (
        <>
            <NextSeo
                title="About | Pokédex"
                description="A little more about the project, the motivations for creating it, the technology used to develop it and future updates."
                additionalMetaTags={[
                    {
                        name: "keywords",
                        content:
                            "About, Pokédex, Pokémon, Technology, Updates, Improvements"
                    }
                ]}
                canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/about`}
            />

            <S.Wrapper>
                <S.Title>About the Pokédex</S.Title>

                <S.Description>
                    This project was developed with the aim of putting into
                    practice the knowledge acquired in Next.js, TypeScript,
                    Styled Components, Zustand, Jest and React Testing Library,
                    through a fun theme that is one of the creator&apos;s
                    passions: Pokémon!
                </S.Description>

                <S.Description>
                    Over time, the Pokédex will receive updates that will
                    implement improvements in the search filters and display of
                    Pokémon information.
                </S.Description>

                <S.AboutImage
                    src="/images/about.png"
                    width={250}
                    height={200}
                    alt="Pokémon thinking"
                    priority
                />
            </S.Wrapper>
        </>
    )
}
