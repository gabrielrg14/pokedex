import { Type } from "src/utils/pokemon";

import BadgeType from "src/components/BadgeType";

import { Wrapper } from "./styles";

interface RowTypesProps {
    types: Type[] | undefined
}

const RowTypes: React.FC<RowTypesProps> = ({ types }): JSX.Element => {
    return (
        <Wrapper>
            {types?.map((item, index) => (
                <div key={index}>
                    <BadgeType type={item.type.name} />
                </div>
            ))}
        </Wrapper>
    )
}

export default RowTypes;