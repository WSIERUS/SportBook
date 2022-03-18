import React, { useState } from "react";

import './styles/NewPostInput.css'

const NewPostInput = () => {

  let [description, setDescription] = useState('')

  const handleChangePost = (event) => {
    setDescription(description = event.target.value)
  }

  const handleAddPost = (event) => {
    event.preventDefault()
    console.log(`dodaj post : ${description}`)
  }

  return(
    <div className='new-post-form'>
        <input type="text" value={description} onChange={handleChangePost} className='new-post-input' placeholder="Napisz post . . ."/>
        <button className="new-post-button" onClick={handleAddPost}>Dodaj Post</button>
    </div>
  )
}

export default NewPostInput