import React, { useState } from "react";

import './styles/NewPostInput.css'

const NewPostInput = (props) => {

  let [title, setTitle] = useState('')

  let [description, setDescription] = useState('')

  const handleChangeTitle = (event) => {
    setTitle(title = event.target.value)
  }

  const handleChangeDescription = (event) => {
    setDescription(description = event.target.value)
  }

  return(
    <div className="new-post">
      <div className='new-post-form'>
        <input type="text" value={title} onChange={handleChangeTitle} className='new-post-input' placeholder="Napisz tytuł . . ."/>
        <input type="text" value={description} onChange={handleChangeDescription} className='new-post-input' placeholder="Napisz opis postu . . ."/>
        <button className="new-post-button" onClick={() => props.handleAddPost(title, description, props.userName)}>Dodaj Post</button>
      </div>
    </div>
  )
}

export default NewPostInput