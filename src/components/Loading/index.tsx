import * as S from "./styles";
import Image from 'next/image';

const Loading = () => {
    return (
        <S.Wrapper>
            <Image src={"/images/loading.gif"} width={300} height={200} alt="Pikachu loading" priority />
            <h3>Loading...</h3>
        </S.Wrapper>
    )
}

export default Loading;