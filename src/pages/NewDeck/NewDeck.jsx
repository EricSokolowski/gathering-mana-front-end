import { useState } from "react";
import CardSearch from "../../components/CardSearch/CardSearch.jsx";
import styles from "./NewDeck.module.css"
import CardList from "../../components/CardList/CardList.jsx";
import * as deckService from "../../services/deckService"
import { useNavigate } from "react-router-dom";

const NewDeck = (props) => {
  const navigate = useNavigate()
  const [cards, setCards] = useState([])
  const [title, setTitle] = useState("")

  const handleAddCard = (cardData) => {
    const card = {...cardData, colorIdentity: cardData.colorIdentity[0]}
    console.log("**This is CARD**", card)
    setCards([...cards, card])
  }
  
  const handleRemoveCard = (cardData) => {
  setCards([...cards, cardData])
  setCards(cards.filter((c) => c.id !== cardData.id))
  }

  const handleSubmit = async () => {
    const res = await props.handleAddDeck({
      title:title,
      cards:cards
    })
    navigate('/decks-index')
    console.log("***RES", res)
  }

  return (
    <main className={styles.container}>
      <section>
        <CardSearch handleAddCard={handleAddCard}/>
      </section>
      <section>
        <input placeholder="Enter deck title" type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <div>
        <button onClick={handleSubmit}>Confirm Deck</button>
        </div>
        <CardList cards={cards} handleRemoveCard={handleRemoveCard}/>
      </section>
    </main>
  )
    
}

export default NewDeck