import { CardsBox, CardsDiv, CardDesc, CardImg, CardDescItem, CardName, CardCost, CardRatingBox, CardRatingImg, CardRatingSpan } from "./card"
import card2 from "../../../assets/svg/start_cards.svg"

function Card({ takedata, setOnpen, setGetitem, onClose }) {

    return (
        <section>
            <CardsBox onClick={onClose}>
                {
                    takedata?.map((item, index) => {
                        return (
                            <CardsDiv key={item.id} onClick={() => {
                                setGetitem(item)
                                setOnpen(true)
                            }} >
                                <CardImg src={item.img} />
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
                        )
                    })
                }
            </CardsBox>
        </section>

    )
}


export default Card