import { useState } from "react"

import { SelectWrraper, Opitons, SelectContainer,SelectWrraperTitle,SelectWrraperTitleImg } from "./menu"
import select1 from "../../../assets/svg/header.svg/vector.svg"

const Menu = ()=>{

    const [vector, setVector] = useState(false)
    const [selectcontainer, setSelectContainer] = useState(false)

    const toggleModal = ()=>{
        setVector(!vector)
        setSelectContainer(!selectcontainer)
    }
    

    return(
        <SelectWrraper >
            <SelectWrraperTitle onClick={toggleModal}>Choos your type <SelectWrraperTitleImg src={select1} vector={vector} /> </SelectWrraperTitle>
            <SelectContainer selectcontainer={selectcontainer}>
            <Opitons>Apple</Opitons>
            <Opitons>Samsung</Opitons>
            </SelectContainer>
        </SelectWrraper>
    )
}

export default Menu