import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./DeckDetails.module.css"




// import Loading from "../Loading/Loading"
// import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

// Services
import * as deckService from '../../services/deckService'

const DeckDetails = () => {
  const { id } = useParams()
  const [deck, setDeck] = useState(null)
  // const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchDeck = async () => {
      const data  = await deckService.show(id)
      console.log(data)
      setDeck(data)
    }
    fetchDeck()
  },[id])

// console.log("Deck State", deck.cards)

// if (!deck) return <Loading />
  return (
    <main className={styles.container}>
      Details
        {/* <CardList cards={cards}/> */}
      {/* <>
        {deck.cards?.map((card) =>
          <h1>
            {card.name}
          </h1>
        )}
      </> */}
      {deck?.cards.map((card) => 
        
        <div key= {card._id}>
        <p>
          {card.name}
        </p>
        <img src={card.imgUrl} alt={card.name} />

        </div>

      
      )}
      <section>
        <h1>Comments</h1>
      </section>
    </main>
  )
}

export default DeckDetails