import axios from "axios"
import { useState, useEffect, useRef } from "react"
import { ModalBox, Btn, Btnclose, ImgBtn } from "./modal.js"

import Form from "../form/form.jsx"

import modal1 from "../../../assets/img/close.png"


function Modal({  Onpen,  getitem, setOnpen, setLoading }) {

  const elModal = useRef()


  if(Onpen == true){
    const onOpen = () => {
      elModal.current.style.left = "0%"
    }
    onOpen()
  }
  else{
    console.log("error");
  }


  const onClose = () => {
    elModal.current.style.left = "-20%"
  }

  return (
    <section>
      <ModalBox ref={elModal} >
        <Btnclose onClick={onClose}><ImgBtn src={modal1} /></Btnclose>
        <Form getitem={getitem} setOnpen={setOnpen} setLoading={setLoading}  />
      </ModalBox>
    </section>
  )
}

export default Modal