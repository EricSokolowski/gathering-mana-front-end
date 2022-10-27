import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditDeck.module.css'
import SpellSearch from "../../components/SpellSearch/SpellSearch"
import CardList from "../../components/CardList/CardList"
import * as deckService from '../../services/deckService'


const EditDeck = (props) => {
  const { state } = useLocation()
  const [cards, setCards] = useState(state)
  const [title, setTitle] = useState("")

  const handleAddCard = (cardData) => {
    const card = {...cardData, colorIdentity: cardData.colorIdentity[0]}
    console.log("**This is CARD**", card)
    setCards([...cards, card])
  }

  const handleRemoveCard = (cardData) => {
    const card = {...cardData, colorIdentity: cardData.colorIdentity[0]}
    console.log("**This is CARD**", card)
    setCards([...cards, card])
  }

  const handleChange = ({ target }) => {
    setCards({...cards, [target.name]: target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await deckService.create({
      title:title,
      cards:cards
    })
    console.log("***RES", res)
  

console.log(cards)
  return (
    <main className={styles.container}>
      <section>
        <SpellSearch handleAddCard={handleAddCard} handleChange={handleChange}/>
      </section>
      <section>
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <CardList cards={cards} handleRemoveCard={handleRemoveCard} handleChange={handleChange}/>
        <button onClick={handleSubmit}>Confirm Deck</button>
      </section>
    </main>
  )
}

export default EditDeck