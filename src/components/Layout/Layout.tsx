import Header from "src/components/Header";
import Footer from "src/components/Footer";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
    return (
        <div>
            <Header />
            <main className="main-container">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;