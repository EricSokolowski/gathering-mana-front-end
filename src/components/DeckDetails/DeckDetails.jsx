import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./DeckDetails.module.css";
import NewComment from "../NewComment/NewComment";
import Comments from "../../components/Comments/Comments"

// Services
import * as deckService from "../../services/deckService";

const DeckDetails = (props) => {
  const { id } = useParams();
  const [deck, setDeck] = useState(null);

  const handleAddComment = async (commentData) => {
    const newComment = await deckService.createComment(id, commentData)
    setDeck({ ...deck, comments: [...deck.comments, newComment] })
  }

  useEffect(() => {
    const fetchDeck = async () => {
      const data = await deckService.show(id)
      setDeck(data)
    }
    fetchDeck()
  }, [id])


  if (!deck) return <h1>Loading</h1>
    return (
      <main className={styles.container}>
        <h1>Details</h1>
        <div className={styles.cardDiv}>
        {deck?.cards.map((card) => (
          <div key={card._id}>
            <img src={card.imageUrl} alt={card.name} />
          </div>
        ))}
        </div>
        <span>
          {deck.owner._id === props.user.profile && (
            <>
              <Link to={`/decks/${id}/edit`} state={deck}>
                Edit Deck
              </Link>
              <button onClick={() => props.handleDeleteDeck(id)}>Delete</button>
            </>
          )}
        </span>
        <section className="comments">
          <h1>Comments</h1>
          <NewComment handleAddComment={handleAddComment} />
          <Comments comments={deck.comments} user={props.user}/>
        </section>
      </main>
    )
  }

export default DeckDetails;
