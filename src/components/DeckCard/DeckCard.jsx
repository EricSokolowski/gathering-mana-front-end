import { Link } from "react-router-dom";
import styles from './DeckCard.module.css'



const DeckCard = ({ deck }) => {
  return (
    <>
    <Link to={`/decks/${deck._id}`} className={styles.link}>
    <div className={styles.cardBody}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{deck.title}</h1>
          </span>
        </header>
        <p>{deck.owner.name}</p>
      </article>
    </div>
    </Link>
    </>
  )
}

export default DeckCard