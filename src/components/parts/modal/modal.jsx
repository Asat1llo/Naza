import axios from "axios"
import { useState, useEffect, useRef } from "react"
import { ModalBox, Btn, Btnclose, ImgBtn } from "./modal.js"

import Form from "../form/form.jsx"

import modal1 from "../../../assets/img/close.png"


function Modal({  Onpen,  getitem, setOnpen, setLoading, showError,showSuccess }) {

  const elModal = useRef()


  if(Onpen == true){
    const onOpen = () => {
      elModal.current.style.left = "0%"
    }
    onOpen()
  }
  else if (Onpen == false){
    // elModal.current.style.left = "-20%"  
  }


  const onClose = () => {
    elModal.current.style.left = "-20%"
  }

  return (
    <section>
      <ModalBox ref={elModal} >
        <Btnclose onClick={onClose}><ImgBtn src={modal1} /></Btnclose>
        <Form getitem={getitem} setOnpen={setOnpen} setLoading={setLoading} showError={showError} showSuccess={showSuccess}  />
      </ModalBox>
    </section>
  )
}

export default Modal