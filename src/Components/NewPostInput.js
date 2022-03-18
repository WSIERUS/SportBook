import React, { useState } from "react";

import './styles/NewPostInput.css'

const NewPostInput = (props) => {

  let [description, setDescription] = useState('')

  const handleChangePost = (event) => {
    setDescription(description = event.target.value)
  }

  return(
    <div className='new-post-form'>
        <input type="text" value={description} onChange={handleChangePost} className='new-post-input' placeholder="Napisz post . . ."/>
        <button className="new-post-button" onClick={() => props.handleAddPost(description, props.userName)}>Dodaj Post</button>
    </div>
  )
}

export default NewPostInput