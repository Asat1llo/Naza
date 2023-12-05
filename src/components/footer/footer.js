import styled from "styled-components";

export const FooterDiv = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
`

export const FooterBox = styled.div`
width:1110px;
position:fixed;
bottom:0;
display:flex;
justify-content:space-between;
align-items:start;
border-radius: 30px 30px 0px 0px;
background: #FFF;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.10);
padding-top:29px;
padding-bottom:32px;
padding-left:29px;
padding-right:29px;
`



export const FooterBoxContact = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:start;
 gap:10px;
`

export const FooterBoxContactText = styled.p`
color: #000;
font-family: Montserrat;
font-size: 17px;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const FooterBoxLanguage = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:35px;
`


export const FooterBoxLanguageItem = styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
 gap:15px;
`

export const FooterBoxLanguageItemText = styled.p`
color: #101010;
font-family: Montserrat;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
cursor:pointer;
&:active{
    color: #FFA542;
}
`

export const FooterBoxLanguageItemImg = styled.img``

export const FooterBoxWebs = styled.div`
display:flex;
justify-content:center;
align-items:end;
gap:10px;
`
export const FooterBoxWebsImg = styled.img`
 width:30px;
 height:30px;
`