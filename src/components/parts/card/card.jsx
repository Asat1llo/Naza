import { CardsBox, CardsDiv, CardDesc, CardImg, CardDescItem, CardName,CardCost,CardRatingBox, CardRatingImg,CardRatingSpan } from "./card"

import card1 from "../../../assets/img/hand_phones.png"
import card2 from "../../../assets/svg/start_cards.svg"

function Card(){
    return(
      <section>
       <CardsBox>
        <CardsDiv>
            <CardImg src={card1}/>
            <CardDesc>
                <CardDescItem>
                    <CardName>Apple BYZ S852I</CardName>
                    <CardCost>2927 ₸</CardCost>
                </CardDescItem>
                <CardRatingBox>
                    <CardRatingImg src={card2}/>
                    <CardRatingSpan>4.7</CardRatingSpan>
                </CardRatingBox>
            </CardDesc>
        </CardsDiv>
       </CardsBox>
      </section>

    )
}


export default Card