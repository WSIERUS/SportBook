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
        <div style={
          {
            fontWeight:'bold',
            cursor: 'pointer',
            fontSize:'0.75cm',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bolder',
          }
        } 
          onClick={() =>props.handleCloseAddPost()}
        >x</div>
        <input type="text" value={title} onChange={handleChangeTitle} className='new-post-title' placeholder="Napisz tytuł . . ." max={10}/>
        <textarea type="text" value={description} onChange={handleChangeDescription} className='new-post-description' placeholder="Napisz opis postu . . ."/>
        <button className="new-post-button" onClick={() => props.handleAddPost(title, description, props.userName)}>Dodaj Post</button>
      </div>
    </div>
  )
}

export default NewPostInput