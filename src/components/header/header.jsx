import { HeaderBox, HeaderItem1, Logo, SelectDiv , Img , SelectMenu, Options, HeaderItem2, Imgdiv} from "./header.js"

import Counter from "../counter/counter.jsx"

import header1 from "../../assets/img/logo_header.png"
import header2 from "../../assets/img/phone_header.png"
import header3 from "../../assets/svg/heart_header.svg"
import header4 from "../../assets/svg/bin_header.svg"

function Header() {
    return (
        <section>
            <HeaderBox>
                <HeaderItem1>
                    <Logo src={header1} />
                    <SelectDiv>
                     <Img src={header2}/>
                     <SelectMenu >
                        <Options value="menu">Выбрать модель телефона</Options>
                        <Options value="menu1">menu1</Options>
                        <Options value="menu2">menu2</Options>
                     </SelectMenu>
                    </SelectDiv>
                </HeaderItem1>
                <HeaderItem2>
                    <Imgdiv>
                    <Img src={header3}/>
                    <Counter/>
                    </Imgdiv>
                    <Imgdiv>
                    <Img src={header4}/>
                    <Counter/>
                    </Imgdiv>
                </HeaderItem2>
            </HeaderBox>
        </section>
    )
}

export default Header