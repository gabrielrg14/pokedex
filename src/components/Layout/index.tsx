import * as S from "./styles"
import { Header, Footer } from "components"

type LayoutProps = {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <S.Main>{children}</S.Main>
            <Footer />
        </>
    )
}
