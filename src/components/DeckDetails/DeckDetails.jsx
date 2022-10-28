import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./DeckDetails.module.css";
import NewComment from "../NewComment/NewComment";

// import Loading from "../Loading/Loading"
// import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"

// Services
import * as deckService from "../../services/deckService";

const DeckDetails = (props) => {
  const { id } = useParams();
  const [deck, setDeck] = useState(null);
  // const [cards, setCards] = useState([])

  const handleAddComment = async (commentData) => {
    const newComment = await deckService.createComment(id, commentData)
    setDeck({ ...deck, comments: [...deck.comments, newComment] })
  }

  useEffect(() => {
    const fetchDeck = async () => {
      const data = await deckService.show(id);
      console.log(data);
      setDeck(data);
    };
    fetchDeck();
  }, [id]);

  // console.log("Deck State", deck.cards)

  if (!deck) return <h1>Loading</h1>;
  return (
    <main className={styles.container}>
      Details
      {deck?.cards.map((card) => (
        <div key={card._id}>
          <img src={card.imageUrl} alt={card.name} />
        </div>
      ))}
      <span>
        {deck.owner._id === props.user.profile && (
          <>
            <Link to={`/decks/${id}/edit`} state={deck}>
              Edit
            </Link>
            <button onClick={() => props.handleDeleteDeck(id)}>Delete</button>
          </>
        )}
      </span>
      <section>
        <h1>Comments</h1>
        <NewComment handleAddComment={handleAddComment} />
      </section>
    </main>
  );
};

export default DeckDetails;
