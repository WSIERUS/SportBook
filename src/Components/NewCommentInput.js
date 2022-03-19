import React, { useState } from "react";

import './styles/NewCommentInput.css'

const NewCommentInput = (props) => {

  let [comment, setComment] = useState('')

  const handleChangeComment = (event) => {
    setComment(comment = event.target.value)
  }

  return(
    <div className='add-comment-form'>
      <input type="text" value={comment} onChange={handleChangeComment} className='add-comment-input'/>
      <button onClick={() => {
        props.handleAddComment(comment, props.posts, props.openPost);
        setComment(comment = '')
      }} className='add-comment-button'>
        Dodaj
      </button>
    </div>
  )
}

export default NewCommentInput