import styled from "styled-components";


export const FormBox = styled.form`
 width:100%;
 display:flex;
 flex-direction:column;
 justfiy-content:center;
 align-items:center;
 gap:10px;
`

export const InputText = styled.input`
 width:200px;
 height:50px;
 border:none;
 border-bottom:1px solid black;
 &:focus{
    outline:none;
 }
`

export const ButtonBtn = styled.button`
 width:200px;
 height:50px;
 background-color:black;
 color:white;
 border-radius:15px;
 font-size:20px;
`