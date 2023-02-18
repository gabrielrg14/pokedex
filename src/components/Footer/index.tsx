import { FooterTag, SpanText, ApiLink } from "./styles";

const Footer: React.FC = (): JSX.Element => {
    return (
        <FooterTag>
            <SpanText>
                {new Date().getFullYear()} &copy;
                Powered by <ApiLink href="https://pokeapi.co/" target="_blank">PokéAPI</ApiLink>
            </SpanText>
        </FooterTag>
    )
}

export default Footer;