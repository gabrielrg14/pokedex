import { SpanNumber } from "./styles";

interface PokemonNumberProps {
    number: number | null | undefined
}

const PokemonNumber: React.FC<PokemonNumberProps> = ({ number }): JSX.Element => {

    function formatPokemonNumber(number: number | null | undefined, quantity: number): string {
        let numberWithZeros = String(number);
        let counter = numberWithZeros.length;
          
        while(counter < quantity) {
            numberWithZeros = "0" + numberWithZeros;
            counter++;
        }
      
        return numberWithZeros;
    }

    return (
        <SpanNumber>
            #{formatPokemonNumber(number, String(number).length >= 5 ? 5 : 4)}
        </SpanNumber>
    )
}

export default PokemonNumber;