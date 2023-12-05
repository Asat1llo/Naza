import { PostBox, PostOpen, PostImg, PostFrom, PostInput, PostBtn } from "./post"
import { useRef, useEffect, useState } from "react"
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

import post1 from "../../../assets/img/open_post.png"
import post2 from "../../../assets/img/close_post.png"


function Post({ setLoading }) {

    const elOpen = useRef()
    const toast = useRef(null)
    const [give, setGive] = useState("-25%")
    const [imag, setImag] = useState(post1)

    const [name, setName] = useState()
    const [cost, setCost] = useState()
    const [rating, setRating] = useState()
    const [img, setImg] = useState()

    const onOpen = (give) => {
        if (give == "-25%") {
            setGive("-5%")
        }
        else if (give == "-5%") {
            setGive("-25%")
        }
        else {
            console.log("error");
        }
    }

    const onImg = (imag) => {
        if (imag == post1) {
            setImag(post2)
        }
        else if (imag == post2) {
            setImag(post1)
        }
        else{
            console.log("error");
        }
    }


    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3000 });
    }
    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 3000 });
    }




    const data = { 'name': name, 'cost': cost, 'rating': rating, 'img': img }

    const onPost = (evt) => {
        evt.preventDefault()
        if (name == "" || cost == "" || rating == "" || img == "") {
            showError()
        }
        else {
            fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phone", {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }).then((res) => {
                showSuccess()
                setLoading(true)
                setName('')
                setCost('')
                setRating('')
                setImg('')
                elOpen.current.style.right = "-25%"
            })
        }
    }

    return (
        <section>
            <Toast ref={toast} />
            <PostBox ref={elOpen} give={give}>
                <PostOpen onClick={() => { 
                    onOpen(give) 
                    onImg(imag)
                    }}>
                    <PostImg src={imag} />
                </PostOpen>
                <PostFrom>
                    <PostInput type="text" placeholder="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                    <PostInput type="text" placeholder="cost" value={cost} onChange={(e) => { setCost(e.target.value) }} />
                    <PostInput type="text" placeholder="rating" value={rating} onChange={(e) => { setRating(e.target.value) }} />
                    <PostInput type="text" placeholder="img" value={img} onChange={(e) => { setImg(e.target.value) }} />

                    <PostBtn onClick={onPost}>Click</PostBtn>
                </PostFrom>
            </PostBox>
        </section>
    )
}

export default Post