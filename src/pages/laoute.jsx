import { Outlet } from "react-router-dom";
import Header from "../components/header_box/header/header.jsx";
import Footer from "../components/footer/footer.jsx"    

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}


export { Layout }