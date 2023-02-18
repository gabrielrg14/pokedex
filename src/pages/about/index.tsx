import Head from 'next/head';

import { 
    Wrapper,
    Title,
    Description,
    AboutImage
} from "src/common/styles/pages/about";

const About: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <Head>
                <title>About</title>
                <meta name="keywords" content="About, Pokédex, Pokémon, Updates, Improvements" />
                <meta name="description" content="Reporting a little about the project, the motivations for creating it, the technology used to develop it and future updates" />
            </Head>

            <Title>About the Pokédex</Title>
            <Description>This project was developed with the aim of putting into practice the knowledge acquired in Next.js, Styled Components and TypeScript, through a fun theme that is one of the creator&apos;s passions: Pokémon!</Description>
            <Description>Over time, the Pokédex will receive updates that will implement improvements in the search filters and display of Pokémon information.</Description>
            <AboutImage src="/images/about.png" width={250} height={200} alt="Pokémon thinking" priority />
        </Wrapper>
    )
}

export default About;