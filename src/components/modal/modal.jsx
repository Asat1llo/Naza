import axios from "axios"
import { useState, useEffect, useRef } from "react"
import { ModalBox, Btn,Btnclose, ImgBtn } from "./modal"

import Form from "../form/form.jsx"

import modal1 from "../../assets/img/close.png"


function Modal() {

    const elModal = useRef()

    const onOpen = ()=>{
      elModal.current.style.position = "static"
    }

    const onClose = ()=>{
      elModal.current.style.position = "absolute"
    }

    return (
        <section>
            <ModalBox ref={elModal} >
                 <Btnclose onClick={onClose}><ImgBtn src={modal1}/></Btnclose>
                 <Form/>
              <Btn onClick={onOpen}>Open</Btn>
            </ModalBox>
        </section>
    )
}

export default Modal