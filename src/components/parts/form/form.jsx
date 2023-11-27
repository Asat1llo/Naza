import axios from "axios"
import { useRef, useState, useEffect } from "react"
import { FormBox, InputText, ButtonBtn, ButtonDelet, FromId } from "./form"


function Form({ getitem, setOnpen, setLoading }) {

    const [name, setName] = useState()
    const [cost, setCost] = useState()
    const [rating, setRating] = useState()
    const [img, setImg] = useState()


    useEffect(() => {
        setName(getitem?.name)
        setCost(getitem?.cost)
        setRating(getitem?.rating)
        setImg(getitem?.img)
    }, [getitem?.id])


    const onUpdate = (id) => {
        if(name == "" || cost == "" || rating == "" || img == "" ){
            console.log("error")
        }
        else{
            setLoading(true)
            axios.put(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phone/${id}`, {
                name, cost, rating, img
            }).then((res) => {
                setOnpen(false)
                setLoading()
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
            })
    }

    return (
        <section>
            <FormBox>
                <FromId>{getitem?.id}</FromId>
                <InputText type="text" placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                <InputText type="text" placeholder="cost" value={cost} onChange={(e) => { setCost(e.target.value) }} />
                <InputText type="text" placeholder="rating" value={rating} onChange={(e) => { setRating(e.target.value) }} />
                <InputText type="text" placeholder="img" value={img} onChange={(e) => { setImg(e.target.value) }} />
                <ButtonBtn onClick={(evt) => {
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