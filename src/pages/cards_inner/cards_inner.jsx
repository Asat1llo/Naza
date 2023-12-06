import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const Cards_Inner = ()=>{

    const [data, setData] = useState([])
    const {cardid} = useParams()

    async function onFetch() {
        try {
            const res = await fetch(`https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phone/${cardid}`)
            const data = await res.json()
            setData(data)
        }
        catch {
            console.log("error");
        }

    }

    useEffect(() => {
        onFetch()
    }, [])

    return(
       <>
        <h1>{data?.name}</h1>
        <h1>{data?.cost}</h1>
        <h1>{data?.rating}</h1>
        <h1>{data?.rating}</h1>
       </>
    )
}

export default Cards_Inner