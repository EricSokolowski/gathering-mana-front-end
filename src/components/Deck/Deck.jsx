import { Link } from "react-router-dom";
import styles from './DeckCard.module.css'

// Components


const Deck = ({ deck }) => {
  return (
    <Link to={`/decks/${deck._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{deck.title}</h1>
            <h1>{deck.owner}</h1>
          </span>
        </header>
      </article>
    </Link>
  )
}

export default Deck