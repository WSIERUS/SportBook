import React, { useState } from "react";

import './styles/NewCommentInput.css'

const NewCommentInput = () => {

  let [comment, setComment] = useState('')

  const handleChangeComment = (event) => {
    setComment(comment = event.target.value)
  }

  const handleAddComment = (event) => {
    event.preventDefault()
    console.log(`dodaj komentarz : ${comment}`)
    setComment(comment='')
  }

  return(
    <form onSubmit={handleAddComment} className='add-comment-form'>
      <input type="text" value={comment} onChange={handleChangeComment} className='add-comment-input'/>
    </form>
  )
}

export default NewCommentInput