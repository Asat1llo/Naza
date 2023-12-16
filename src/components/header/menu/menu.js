import styled from "styled-components";

const elFunction = ({vector})=>{
    try{
        switch (vector) {
            case true: return"rotate(180deg)";
            case false: return"rotate(0deg)";
            default : return "rotate(0deg)";
        }
    }
    catch(error){
        console.log("error");
    }
}


export const SelectWrraper = styled.div`
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:start;
 gap:5px;
 position:relative;
 `
 export const SelectWrraperTitle = styled.h3`
 color: #101010;
 font-family: Montserrat;
 font-size: 15px;
 font-style: normal;
 font-weight: 500;
 line-height: normal;
 cursor:pointer;
 z-index:2;
 `
export const SelectContainer = styled.div`
 position:absolute;
//  transform:${({selectcontainer})=>selectcontainer?"translateY(30px)" : "translateY(-30px)"};
 z-index:0;
 display:${({selectcontainer})=>selectcontainer?"flex":"none"};
 flex-direction:column;
 justify-content:center;
 background-color:red;
 align-items:start;
 transition:0.5s linear;
`


export const Opitons = styled.div`
color: #101010;
font-size: 15px;
text-align:start;
font-style: normal;
font-weight: 500;
line-height: normal;
:hover{
    color: #FFA542;
}
`

export const SelectWrraperTitleImg =styled.img`
transition:0.5s linear;
 transform:${elFunction};
`