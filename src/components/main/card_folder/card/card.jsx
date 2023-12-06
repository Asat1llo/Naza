import { CardsBox, CardsDiv, CardDesc, CardImg, CardDescItem, CardName, CardCost, CardRatingBox, CardRatingImg, CardRatingSpan } from "./card"
import { NavLink as Link } from "react-router-dom"
import { useEffect, useState } from "react"

import card2 from "../../../../assets/svg/start_cards.svg"


function Card() {

    const [data, setData] = useState([])

    async function onFetch() {
        try {
            const res = await fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phone")
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

    console.log(data);

    return (
        <section>
            <CardsBox >
                {
                    data?.map((item, index) => {
                        return (
                            <Link to={`cards_inner/${item?.id}`} key={item?.id} >
                                <CardsDiv key={item?.id} onClick={() => {
                                    setGetitem(item)
                                    setOnpen(true)
                                }} >
                                    <CardImg src={item?.img} />
                                    <CardDesc>
                                        <CardDescItem>
                                            <CardName>{item?.name}</CardName>
                                            <CardCost>{item?.cost}₸</CardCost>
                                        </CardDescItem>
                                        <CardRatingBox>
                                            <CardRatingImg src={card2} />
                                            <CardRatingSpan>{item?.rating}</CardRatingSpan>
                                        </CardRatingBox>
                                    </CardDesc>
                                </CardsDiv>
                            </Link>
                        )
                    })
                }
            </CardsBox>
        </section>

    )
}


export default Card