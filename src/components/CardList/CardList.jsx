import styles from './CardList.module.css'


const CardList = (props) => {
  return (
    <section>
      <h1> Your Deck</h1>
      <input
          placeholder="Enter deck title"
          type="text"
          value={props.title}
          onChange={(e) => props.setTitle(e.target.value)}
        />
      <button onClick={props.handleSubmit}>Confirm Deck</button>
      {props.cards.map((card, index)=>(
        <div className={styles.cardContainer} key={index} >
          <img src={card.imageUrl} alt={card.name} id="card" className={styles.container}/>
          <button className={styles.button} onClick={() => props.handleRemoveCard(index)}>Remove Card</button>
        </div>
      ))}
    </section>
  )
}

export default CardList