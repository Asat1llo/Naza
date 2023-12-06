import { HeaderBox, HeaderItem1, Logo, SelectDiv , Img , SelectMenu, Options, HeaderItem2, Imgdiv} from "./header.js"
import { NavLink as Link } from "react-router-dom"

import Counter  from "../counter/counter.jsx"

import header1 from "../../../assets/img/logo_header.png"
import header2 from "../../../assets/img/phone_header.png"
import header3 from "../../../assets/svg/heart_header.svg"
import header4 from "../../../assets/svg/bin_header.svg"

function Header() {
    return (
        <section>
            <HeaderBox>
                <HeaderItem1>
                    <Link to={'/'}>
                    <Logo src={header1} />
                    </Link>
                    <SelectDiv>
                     <Img src={header2}/>
                     <SelectMenu name="menu" id="menu"  >
                        <Options>Выбрать модель телефона</Options>
                        <optgroup label="Apple">
                        <Options value="menu1" >iPhone 12</Options>
                        <Options value="menu1" >iPhone 12 Max</Options>
                        <Options value="menu1" >iPhone 13</Options>
                        <Options value="menu1" >iPhone 13 Max</Options>
                        <Options value="menu1" >iPhone 13 Pro Max</Options>
                        <Options value="menu1" >iPhone 14</Options>
                        </optgroup>
                        <optgroup label="Samsung">
                        <Options value="menu2">S20</Options>
                        <Options value="menu2">S20 Ultra</Options>
                        <Options value="menu2">S21</Options>
                        <Options value="menu2">S21 Ultra</Options>
                        <Options value="menu2">S22</Options>
                        <Options value="menu2">S22 Ultra</Options>
                        <Options value="menu2">S23</Options>
                        <Options value="menu2">S23 Ultra</Options>
                        </optgroup>
                     </SelectMenu>
                    </SelectDiv>
                </HeaderItem1>
                <HeaderItem2>
                    <Imgdiv>
                    <Counter/>
                    <Img src={header3}/>
                    </Imgdiv>
                    <Imgdiv>
                    <Counter/>
                    <Img src={header4}/>
                    </Imgdiv>
                </HeaderItem2>
            </HeaderBox>
        </section>
    )
}

export default Header