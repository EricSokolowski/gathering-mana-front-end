import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import styles from './EditDeck.module.css'
import SpellSearch from "../../components/SpellSearch/SpellSearch"
import CardList from "../../components/CardList/CardList"



const EditDeck = (props) => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [cards, setCards] = useState(state.cards)
  const [title, setTitle] = useState(state.title)

  console.log(state)

  const handleAddCard = (cardData) => {
    const card = {...cardData, colorIdentity: cardData.colorIdentity[0]}
    console.log("**This is CARD**", card)
    setCards([...cards, card])
  }

  const handleRemoveCard = (cardData) => {
    setCards([...cards, cardData])
    setCards(cards.filter((c) => c.id !== cardData.id))
    }


  const handleSubmit = async (e) => {
    await props.handleUpdateDeck({
      _id:state._id,
      title:title,
      cards:cards
    })
    navigate('/decks-index')
  }


  return (
    <main className={styles.container}>
      <section className={styles.spellSearch}>
        <SpellSearch handleAddCard={handleAddCard} />
      </section>
      <input type="text" className={styles.title} value={title} onChange={(e)=> setTitle(e.target.value)}/>
      <section className={styles.cardList}>
        <CardList cards={cards} handleRemoveCard={handleRemoveCard}/>
        <button onClick={handleSubmit}>Confirm Deck</button>
      </section>
    </main>
  )
}

export default EditDeck