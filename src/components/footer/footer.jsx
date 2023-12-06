import { FooterDiv, FooterBox, FooterBoxContact, FooterBoxContactText, FooterBoxLanguage, FooterBoxLanguageItem, FooterBoxLanguageItemImg, FooterBoxLanguageItemText, FooterBoxWebs, FooterBoxWebsImg } from "./footer"
import { Logo } from "../header_box/header/header.js"
import { NavLink as Link } from "react-router-dom"

import footer1 from "../../assets/svg/world-footer.svg"
import footer2 from "../../assets/img/wk-footer.png"
import footer3 from "../../assets/img/instagram-footer.png"
import footer4 from "../../assets/img/telegram-footer.png"
import footer5 from "../../assets/img/whatsapp-footer.png"
import footer6 from "../../assets/img/logo_header.png"

function Footer() {
    return (
        <section>
            <FooterDiv>
                <FooterBox>
                    <Link to={"/"}>
                    <Logo src={footer6} />
                    </Link>
                    <FooterBoxContact>
                        <FooterBoxContactText>Избранное</FooterBoxContactText>
                        <FooterBoxContactText>Корзина</FooterBoxContactText>
                        <FooterBoxContactText>Контакты</FooterBoxContactText>
                    </FooterBoxContact>
                    <FooterBoxLanguage>
                        <FooterBoxContactText>Условия сервиса</FooterBoxContactText>
                        <FooterBoxLanguageItem>
                            <FooterBoxLanguageItemImg src={footer1} />
                            <FooterBoxLanguageItemText>Uz</FooterBoxLanguageItemText>
                            <FooterBoxLanguageItemText>Ru</FooterBoxLanguageItemText>
                            <FooterBoxLanguageItemText>Eng</FooterBoxLanguageItemText>
                        </FooterBoxLanguageItem>
                    </FooterBoxLanguage>
                    <FooterBoxWebs>
                        <FooterBoxWebsImg src={footer2} />
                        <FooterBoxWebsImg src={footer3} />
                        <FooterBoxWebsImg src={footer4} />
                        <FooterBoxWebsImg src={footer5} />
                    </FooterBoxWebs>
                </FooterBox>
            </FooterDiv>
        </section>
    )
}

export default Footer