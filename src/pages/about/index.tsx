import { NextSeo } from 'next-seo';

import { 
    Wrapper,
    Title,
    Description,
    AboutImage
} from "src/common/styles/pages/about";

const About: React.FC = (): JSX.Element => {
    return (
        <>
            <NextSeo
                title="About | Pokédex"
                description="A little more about the project, the motivations for creating it, the technology used to develop it and future updates."
                additionalMetaTags={[{
                    name: "keywords",
                    content: "About, Pokédex, Pokémon, Technology, Updates, Improvements"
                }]}
            />

            <Wrapper>
                <Title>About the Pokédex</Title>
                <Description>This project was developed with the aim of putting into practice the knowledge acquired in Next.js, Styled Components and TypeScript, through a fun theme that is one of the creator&apos;s passions: Pokémon!</Description>
                <Description>Over time, the Pokédex will receive updates that will implement improvements in the search filters and display of Pokémon information.</Description>
                <AboutImage src="/images/about.png" width={250} height={200} alt="Pokémon thinking" priority />
            </Wrapper>
        </>
    )
}

export default About;