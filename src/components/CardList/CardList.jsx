import styles from './CardList.module.css'

const CardList = (props) => {
  return (
    <>
      {props.cards.map((card, index)=>(
        <div className={styles.cardContainer} key={index} >
          <img src={card.imageUrl} alt={card.name} id="card" className={styles.container}/>
          <button className={styles.button} onClick={() => props.handleRemoveCard(index)}>Remove Card</button>
        </div>
      ))}
    </>
  )
}

export default CardList