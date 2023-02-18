import Image from 'next/image';

import { getColorsByPokemonType } from "src/common/utils/colorTypes";

import { Wrapper, Type } from "./styles";

interface BadgeTypeProps {
    type: string
}

const BadgeType: React.FC<BadgeTypeProps> = ({ type }): JSX.Element => {
    return (
        <Wrapper>
            <Image src={`/images/types/${type}.svg`} width={32} height={32} alt={`Type ${type}`} />
            <Type style={getColorsByPokemonType(type)}>
                {type}
            </Type>
        </Wrapper>
    )
}

export default BadgeType;