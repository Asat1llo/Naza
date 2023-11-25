import Header from "../../components/header/header.jsx"
import Swiperr from '../../components/swiper/swiper.jsx'
import Post from "../../pages/post/post.jsx"
import Footer from '../../components/footer/footer.jsx'


const Home = () => {
    return (
        <>
            <Header />
            <Swiperr />
            <Post/>
             {/* <Footer /> */}
        </>
    )
}

export default Home