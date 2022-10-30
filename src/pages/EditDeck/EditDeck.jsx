import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./EditDeck.module.css";
import CardSearch from "../../components/CardSearch/CardSearch";
import CardList from "../../components/CardList/CardList";

const EditDeck = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [cards, setCards] = useState(state.cards);
  const [title, setTitle] = useState(state.title);

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

  const handleSubmit = async (e) => {
    await props.handleUpdateDeck({
      _id: state._id,
      title: title,
      cards: cards,
    });
    navigate("/decks-index");
  };

  return (
    <main className={styles.container}>
        <CardSearch handleAddCard={handleAddCard} />
        <CardList cards={cards} handleRemoveCard={handleRemoveCard} handleSubmit={handleSubmit} title={title} setTitle={setTitle}/>
    </main>
  );
};

export default EditDeck;