import { NextSeo } from 'next-seo';
import Link from 'next/link';

import { 
    Wrapper,
    TextNotFound,
    TextNotHere,
    PsyduckImage
} from "src/common/styles/pages/404";

const PageNotFound: React.FC = (): JSX.Element => {
    return (
        <>
            <NextSeo title="404 | Page not found" />

            <Wrapper>
                <TextNotFound>Page or Pokémon not found!</TextNotFound>
                <TextNotHere>Unfortunately the page you are looking for is not here.</TextNotHere>
                <PsyduckImage src="/images/psyduck.png" width={350} height={200} alt="Psyduck confused" priority />

                <Link href="/">
                    <div className="btn-default">Go to Home</div>
                </Link>
            </Wrapper>
        </>
    )
}

export default PageNotFound;