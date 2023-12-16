import { Logo, HeaderWrraper } from "./header.js"
import { Container } from "../../Container.js"
import Menu from "./menu/menu.jsx"

import logo from "../../assets/svg/logo.svg"


const Header = () => {
    return (
        <section>
            <Container>
                <HeaderWrraper>
                    <Logo src={logo} />
                    <Menu />
                </HeaderWrraper>
            </Container>
        </section>
    )
}

export default Header