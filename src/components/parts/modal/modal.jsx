import axios from "axios"
import { useState, useEffect, useRef } from "react"
import { ModalBox, Btn, Btnclose, ImgBtn } from "./modal.js"

import Form from "../form/form.jsx"

import modal1 from "../../../assets/img/close.png"


function Modal({ Onpen, getitem, setOnpen, setLoading, showError, showSuccess }) {

  const elModal = useRef()

  const onOpen = () => {
    elModal.current.style.left = "0"
  }
  
  function Close2(){
    elModal.current.style.left = "-20%"
  }

  if (Onpen == true) {
    onOpen()
  }
  else if (Onpen == false) {
    Close2()
  }
  else {
    console.log("error");
  }


  const onClose = () => {
    elModal.current.style.left = "-20%"
  }

  return (
    <section>
      <ModalBox ref={elModal} >
        <Btnclose onClick={onClose}><ImgBtn src={modal1} /></Btnclose>
        <Form getitem={getitem} setOnpen={setOnpen} setLoading={setLoading} showError={showError} showSuccess={showSuccess} />
      </ModalBox>
    </section>
  )
}

export default Modal