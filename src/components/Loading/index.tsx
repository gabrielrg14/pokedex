import Image from 'next/image';

import { Wrapper } from "./styles";

const Loading: React.FC = (): JSX.Element => {
    return (
        <Wrapper>
            <Image src={"/images/loading.gif"} width={300} height={200} alt="Pikachu loading" priority />
            <h3>Loading...</h3>
        </Wrapper>
    )
}

export default Loading;