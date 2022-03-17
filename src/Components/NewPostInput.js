import React, { useState } from "react";

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
    <form onSubmit={handleAddPost}>
      <input type="text" value={description} onChange={handleChangePost}/>
      <button>Dodaj Post</button>
    </form>
  )
}

export default NewPostInput