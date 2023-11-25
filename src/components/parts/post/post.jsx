import { PostBox, PostOpen, PostImg, PostFrom, PostInput, PostBtn } from "./post"
import { useRef, useEffect, useState } from "react"
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';

import post1 from "../../../assets/img/open_post.png"
import post2 from "../../../assets/img/close_post.png"


function Post() {

    const elOpen = useRef()
    const toast = useRef(null)

    const [name , setName] = useState()
    const [cost , setCost] = useState()
    const [rating , setRating] = useState()
    const [img , setImg] = useState()

    const onOpen = ()=>{
         elOpen.current.style.right = "-5%"
    }

    const showError = () => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: 'Message Content', life: 3000 });
    }
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
    }

    const data = {'name':name, 'cost':cost, 'rating':rating, 'img':img}

    const onPost = (evt)=>{
        evt.preventDefault()
        if(name == "" || cost == "" || rating =="" || img ==""){
            showError()
        }
        else{
            fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phone",{
             method:'Post',
             headers:{
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(data),
            }).then((res)=>{
                showSuccess()
                setName('')
                setCost('')
                setRating('')
                setImg('')
            })
        }
    }

    return (
        <section>
            <Toast ref={toast} />
            <PostBox ref={elOpen}>
            <PostOpen onClick={onOpen}>
                <PostImg src={post1}/>
            </PostOpen>
            <PostFrom>
                <PostInput type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                <PostInput type="text" placeholder="cost" value={cost} onChange={(e)=>{setCost(e.target.value)}} />
                <PostInput type="text" placeholder="rating" value={rating} onChange={(e)=>{setRating(e.target.value)}} />
                <PostInput type="text" placeholder="img" value={img} onChange={(e)=>{setImg(e.target.value)}} />

                <PostBtn onClick={onPost}>Click</PostBtn>
            </PostFrom>
            </PostBox>
        </section>
    )
}

export default Post