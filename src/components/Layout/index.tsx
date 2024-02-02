import * as S from "./styles"
import { Header, Main, Footer } from "components"

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <S.Layout>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </S.Layout>
    )
}
