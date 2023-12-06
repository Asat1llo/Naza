import { Link , Outlet } from "react-router-dom";
import Header from "../components/header/header.jsx"
import Footer from "../components/footer/footer.jsx"
import Swiperr from "../components/swiper/swiper.jsx";

const Layout = () =>{
    return(
        <>
         <Header/>
         <Swiperr/>
         <Outlet/>
        <Footer/>
        </>
    )
}


export {Layout}