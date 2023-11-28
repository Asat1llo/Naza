import styled from "styled-components";

export const FooterBox = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
`

export const FooterBoxContact = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
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
&:hover{
    color: #FFA542;
}
`

export const FooterBoxLanguageItemImg = styled.img``

export const FooterBoxWebs = styled.div`
display:flex;
justify-content:center;
alig-items:center;
gap:10px;
`
export const FooterBoxWebsImg = styled.img`
 width:30px;
 height:30px;
`