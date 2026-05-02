import { NextSeo } from "next-seo"

import * as S from "./styles"
import { AboutImage, AboutTitle, Paragraph } from "./sub-components"

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

            <S.Container>
                <S.Section>
                    <AboutTitle />
                    <Paragraph
                        text="This project was developed with the aim of putting into
                        practice the knowledge acquired in Next.js, TypeScript,
                        Styled Components, Zustand, React Query, Jest, React
                        Testing Library, Mock Service Worker, Cypress and Docker
                        through a fun theme that is one of the creator's
                        passions: Pokémon!"
                    />
                    <Paragraph
                        text="Over time, the Pokédex will receive updates that will
                        implement improvements in the search filters and display
                        of Pokémon information."
                    />
                    <AboutImage />
                </S.Section>
            </S.Container>
        </>
    )
}
