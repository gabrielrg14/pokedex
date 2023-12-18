import * as S from "./styles"
import Header from "components/Header"
import Footer from "components/Footer"

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <S.Main>{children}</S.Main>
            <Footer />
        </>
    )
}

export default Layout
