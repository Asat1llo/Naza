import { CardsDiv, CardDesc, CardImg, CardDescItem, CardName, CardCost, CardRatingBox, CardRatingImg, CardRatingSpan } from "./card"


import card1 from "../../../assets/img/hand_phones.png"
import card2 from "../../../assets/svg/start_cards.svg"

function Card({ takedata }) {

    return (
        <section>
            {
                takedata.map((item, index) => {
                    return (
                        <CardsDiv key={item.id}>
                            <CardImg src={item.img} />
                            <CardDesc>
                                <CardDescItem>
                                    <CardName>{item.name}</CardName>
                                    <CardCost>{item.cost}₸</CardCost>
                                </CardDescItem>
                                <CardRatingBox>
                                    <CardRatingImg src={card2} />
                                    <CardRatingSpan>{item.rating}</CardRatingSpan>
                                </CardRatingBox>
                            </CardDesc>
                        </CardsDiv>
                    )
                })
            }
        </section>

    )
}


export default Card