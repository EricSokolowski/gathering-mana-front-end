import { Link } from "react-router-dom";
import styles from './DeckCard.module.css'

// Components


const DeckCard = ({ deck }) => {
console.log (deck)
  // console.log("NAME", deck.owner.name)
  return (
    <Link to={`/decks/${deck._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{deck.title}</h1>
          </span>
        </header>
        <p>{deck.owner.name}</p>
      </article>
    </Link>
  )
}

export default DeckCard