

const CardList = (props) => {
  console.log(props.cards)
  return (
    <>
      {props.cards.map((card)=>(
        <div key={card.id}>
          {card.name}
        </div>
      ))}
    </>
  )
}

export default CardList