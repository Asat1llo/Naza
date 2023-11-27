import styled, { createGlobalStyle } from "styled-components";


export const SwiperBox = styled.div`
 display:flex;
 justify-contetn:center;
 align-items:center;
 padding-top:22px;
`

export const Swipeer = createGlobalStyle`
  
.swiper {
    width: 1080px;
    height: 100%;
    background-color:black;
    border-radius:30px;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    overflow: hidden;
  }
  
  .swiper-slide img {
    display: block;
    height: 200px;
  }
  
`
