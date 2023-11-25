import { PostBox, PostOpen, PostImg } from "./post"
import { useRef } from "react"

import post1 from "../../assets/img/open_post.png"
import post2 from "../../assets/img/close_post.png"


function Post() {

    const elOpen = useRef()

    const onOpen = ()=>{
         elOpen.current.style.right = "-5%"

    }

    return (
        <section>
            <PostBox ref={elOpen}>
            <PostOpen onClick={(e)=>{onOpen(console.log(e.target))}}>
                <PostImg src={post1}/>
            </PostOpen>
            </PostBox>
        </section>
    )
}

export default Post