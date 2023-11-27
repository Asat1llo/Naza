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
 border:1px  solid black;
 border-right:1px solid white;
 position:absolute;
 left:-30px;
 top:-1px;
`


export const PostImg = styled.img`
 width:25px;
 height:25px;
`


export const PostFrom = styled.form`
 width:100%;
 height:100vh;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:start;
 padding-left:10px;
 gap:10px;
`

export const PostInput = styled.input`
 width:300px;
 height:50px;
 border:none;
 border-bottom:1px solid black;
 background-color:transparent;
 font-size:15px;

 &:focus{
   outline:none;
 }
`

export const PostBtn = styled.button`
 width:300px;
 height:50px;
 background-color:black;
 border-radius:10px;
 color:white;
 font-size:20px;
`