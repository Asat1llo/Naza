import styled from "styled-components";

export const ModalBox = styled.div`
 width:20%;
 height:100vh; 
 display:flex;
 border-radius:0px 10px 10px 0px;
 border:none;
 border:1px solid black;
 flex-direction:column;
 justify-contetn:center;
 align-items:center;
 position: fixed;
 top:10px ;
 left:-20%;
 transition :0.5s linear; 
`

export const Btn = styled.button`
 position:fixed;
 right:50%;
`
export const Btnclose = styled.button`
transform: translate(400%,-8%);
background-color:black;
border-radius:50%;
`


export const ImgBtn = styled.img`
 width:30px;
 height:30px;
`