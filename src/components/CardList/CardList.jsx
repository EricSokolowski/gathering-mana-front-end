

const CardList = (props) => {
  console.log(props.cards)
  return (
    <>
      {props.cards.map((card)=>(
        <div key={card.id} >
          {card.name}
          <img src={card.imageUrl} alt={card.name} />
          {/* <button onClick={() => props.handleRemoveCard(card)}>Remove Card</button> */}
        </div>
      ))}
    </>
  )
}

export default CardList