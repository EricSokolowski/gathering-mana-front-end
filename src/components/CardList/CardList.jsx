import styles from './CardList.module.css'

const CardList = (props) => {
  return (
    <>
      {props.cards.map((card)=>(
        <div key={card.id} >
          <img src={card.imageUrl} alt={card.name} id="card" className={styles.container}/>
          {/* <button onClick={() => props.handleRemoveCard(card)}>Remove Card</button> */}
        </div>
      ))}
    </>
  )
}

export default CardList