

const CommentCard = ({ comment }) => {
  console.log(comment)
  return (
    <article>
      {/* <header>
        <h2>{comment.author.name}</h2>
      </header> */}
      <p>{comment.content}</p>
    </article>
  )
}

export default CommentCard