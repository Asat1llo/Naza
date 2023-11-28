import { FooterBox, FooterBoxContact, FooterBoxContactText, FooterBoxLanguage,FooterBoxLanguageItem,FooterBoxLanguageItemImg, FooterBoxLanguageItemText ,FooterBoxWebs ,FooterBoxWebsImg } from "./footer"

import footer1 from "../../assets/svg/world-footer.svg"
import footer2 from "../../assets/img/wk-footer.png"
import footer3 from "../../assets/img/instagram-footer.png"
import footer4 from "../../assets/img/telegram-footer.png"
import footer5 from "../../assets/img/whatsapp-footer.png"

function Footer(){
    return(
        <section>
         <FooterBox>
            <FooterBoxContact>
                <FooterBoxContactText>Избранное</FooterBoxContactText>
                <FooterBoxContactText>Корзина</FooterBoxContactText>
                <FooterBoxContactText>Контакты</FooterBoxContactText>
            </FooterBoxContact>
            <FooterBoxLanguage>
                <FooterBoxContactText>Условия сервиса</FooterBoxContactText>
                <FooterBoxLanguageItem>
                <FooterBoxLanguageItemImg src={footer1}/>
                <FooterBoxLanguageItemText>Uz</FooterBoxLanguageItemText>
                <FooterBoxLanguageItemText>Ru</FooterBoxLanguageItemText>
                <FooterBoxLanguageItemText>Eng</FooterBoxLanguageItemText>
                </FooterBoxLanguageItem>
            </FooterBoxLanguage>
            <FooterBoxWebs>
                <FooterBoxWebsImg src={footer2}/>
                <FooterBoxWebsImg src={footer3}/>
                <FooterBoxWebsImg src={footer4}/>
                <FooterBoxWebsImg src={footer5}/>
            </FooterBoxWebs>
         </FooterBox>
        </section>
    )
}

export default Footer