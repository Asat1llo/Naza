import styled, { createGlobalStyle } from "styled-components";


export const SwiperBox = styled.div`
 display:flex;
 justify-contetn:center;
 align-items:center;
 padding-top:22px;
 padding-left:165px;
 padding-right:165px;
`

export const Swipeer = createGlobalStyle`
  
.swiper {
    width: 100%;
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
