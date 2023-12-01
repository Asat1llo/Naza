import axios from "axios"
import { useRef, useState, useEffect } from "react"
import { FormBox, InputText, ButtonBtn, ButtonDelet, FromId } from "./form"
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';


function Form({ getitem, setOnpen, setLoading , elModal }) {

    const [name, setName] = useState()
    const [cost, setCost] = useState()
    const [rating, setRating] = useState()
    const [img, setImg] = useState()
    const toast = useRef(null)
    const elShek1 = useRef()
    const elShek2 = useRef()
    const elShek3 = useRef()
    const elShek4 = useRef()


    useEffect(() => {
        setName(getitem?.name)
        setCost(getitem?.cost)
        setRating(getitem?.rating)
        setImg(getitem?.img)
    }, [getitem?.id])


    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3000 });
    }
    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    }



    const onUpdate = (id) => {
        if (name == "") {
            showError()
            elShek1.current.style.borderBottom = '2px solid red'
        }
        else if (cost == "") {
         showError()
         elShek2.current.style.borderBottom = '2px solid red'
        }
        else if (rating == "") {
         showError()
         elShek3.current.style.borderBottom = '2px solid red'
        }
        else if (img == "") {
         showError()
         elShek4.current.style.borderBottom = '2px solid red'
        }
        else {
            setLoading(true)
            axios.put(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phone/${id}`, {
                name, cost, rating, img
            }).then((res) => {
                setOnpen(false)
                setLoading()
                showSuccess()
                if(res){
                    elShek1.current.style.borderBottom = '2px solid black' 
                }
                else if(res){
                    elShek2.current.style.borderBottom = '2px solid black'
                }
                else if(res){
                    elShek3.current.style.borderBottom = '2px solid black'
                }
                else if(res){
                    elShek4.current.style.borderBottom = '2px solid black'
                }
            })
        }
    }

    const onDelet = (id) => {
        setLoading(true)
        axios.delete(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phone/${id}`)
            .then((res) => {
                console.log(res.data);
                setOnpen(false)
                setLoading(false)
                showSuccess()
            })
    }

    return (
        <section>
            <FormBox>
                <Toast ref={toast} />
                <FromId>{getitem?.id}</FromId>
                <InputText ref={elShek1} type="text" placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                <InputText ref={elShek2} type="text" placeholder="cost" value={cost} onChange={(e) => { setCost(e.target.value) }} />
                <InputText ref={elShek3} type="text" placeholder="rating" value={rating} onChange={(e) => { setRating(e.target.value) }} />
                <InputText ref={elShek4} type="text" placeholder="img" value={img} onChange={(e) => { setImg(e.target.value) }} />
                <ButtonBtn className="animate__shakeX" onClick={(evt) => {
                    evt.preventDefault()
                    onUpdate(getitem?.id)
                }}>Update</ButtonBtn>
                <ButtonDelet onClick={(evt) => {
                    evt.preventDefault()
                    onDelet(getitem?.id)
                }}>Delet</ButtonDelet>
            </FormBox>
        </section>
    )
}


export default Form