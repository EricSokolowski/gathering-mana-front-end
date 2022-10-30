import { useState } from "react";
import CardSearch from "../../components/CardSearch/CardSearch.jsx";
import styles from "./NewDeck.module.css";
import CardList from "../../components/CardList/CardList.jsx";
import * as deckService from "../../services/deckService";
import { useNavigate } from "react-router-dom";

const NewDeck = (props) => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [title, setTitle] = useState("");

  const handleAddCard = (cardData) => {
    if (!cardData.colorIdentity) {
      cardData.colorIdentity = "none";
    } else {
      cardData.colorIdentity = cardData.colorIdentity[0];
    }
    setCards([...cards, cardData]);
  };

  // Using an index to filter an array is not best practice.
  // However, we're dealing with an issue where results from
  // the third party api and our database are being included in card state when adding or removing cards in a deck.
  // To deal with different ids we rely on index to handle both.
  // Additionally, users might want multiple instances of the same card in their deck. Filtering by index instead of id will allow a user to do so.

  const handleRemoveCard = (index) => {
    setCards(cards.filter((c, i) => i !== index));
  };

  const handleSubmit = async () => {
    await props.handleAddDeck({
      title: title,
      cards: cards,
    });
    navigate("/decks-index");
  };

  return (
    <main className={styles.container}>
      <CardSearch handleAddCard={handleAddCard} handleSubmit={handleSubmit} />
      <CardList cards={cards} handleRemoveCard={handleRemoveCard} handleSubmit={handleSubmit} setTitle={setTitle} title={title}/>
    </main>
  );
};

export default NewDeck;
