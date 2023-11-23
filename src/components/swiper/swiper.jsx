import { SwiperBox, Swipeer } from "./swiper"
import { Img } from "../header/header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';

import swiper1 from "../../assets/img/iphone.avif"
import swiper2 from "../../assets/img/iphone_12.avif"
import swiper3 from "../../assets/img/s21.avif"
import swiper4 from "../../assets/img/s20.webp"
import swiper5 from "../../assets/img/moder_phone.jpg"
import swiper6 from "../../assets/img/s10.jpg"


function Swiperr(){
    return(
        <section>
         <SwiperBox>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        
        modules={[Autoplay]}
        className="mySwiper"
        >
        <SwiperSlide><Img src={swiper1}/></SwiperSlide>
        <SwiperSlide><Img src={swiper2}/></SwiperSlide>
        <SwiperSlide><Img src={swiper3}/></SwiperSlide>
        <SwiperSlide><Img src={swiper4}/></SwiperSlide>
        <SwiperSlide><Img src={swiper5}/></SwiperSlide>
        <SwiperSlide><Img src={swiper6}/></SwiperSlide>
        <Swipeer/>
      </Swiper>
         </SwiperBox>
        </section>
    )
}


export default Swiperr