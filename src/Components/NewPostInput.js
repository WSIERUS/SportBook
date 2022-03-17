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
    <form onSubmit={handleAddPost} className='new-post-form'>
        <input type="text" value={description} onChange={handleChangePost} className='new-post-input' placeholder="Napisz post . . ."/>
        <button className="new-post-button">Dodaj Post</button>
    </form>
  )
}

export default NewPostInput