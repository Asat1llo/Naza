import styled from "styled-components";


export const PostBox = styled.div`
 width:25%;
 height:100vh;
 border:1px solid black;
 border-radius:0px 0px 0px 10px;
 background-color:white;
 position:fixed;
 top:10px ;
 right:-25%;
 transition: 0.7s linear;
`

export const PostOpen = styled.button`
 width:30px;
 height:30px;
 background-color:white;
 border-radius:10px 0px 0px 10px;
 border:1px solid black;
 position:absolute;
 left:-30px;
 top:-1px;
`


export const PostImg = styled.img`
 width:25px;
 height:25px;
`