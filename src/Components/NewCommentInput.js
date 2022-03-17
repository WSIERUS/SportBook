import React, { useState } from "react";

const NewCommentInput = () => {

  let [comment, setComment] = useState('')

  const handleChangeComment = (event) => {
    setComment(comment = event.target.value)
  }

  const handleAddComment = (event) => {
    event.preventDefault()
    console.log(`dodaj komentarz : ${comment}`)
  }

  return(
    <form onSubmit={handleAddComment}>
      <input type="text" value={comment} onChange={handleChangeComment}/>
      <button>Dodaj Komentarz</button>
    </form>
  )
}

export default NewCommentInput