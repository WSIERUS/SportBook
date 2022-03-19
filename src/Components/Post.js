import React, { useState } from "react";

import './styles/Post.css'

const Post = (props) => {

  let [isMoved, setIsMoved] = useState(false)

  const {author, date, title, description} = props.post

  const descriptionSlice = description.slice(0, 100)

  function handlePostMove(moved) {
    setIsMoved(isMoved = moved)
  }

  return(
    <>
      <div className={isMoved ? "post post-moved" : 'post'} onClick={() => props.handleFocusPost(props.post)} 
        onMouseEnter={() => handlePostMove(true)} onMouseLeave={() => handlePostMove(false)}
      >
        <span className="post-author">{author}</span>
        <span className="post-date">{date}</span>
        <span className="post-title">{title}</span>
        <span className="post-description">{description.length > 100 ? descriptionSlice +  ' . . .' : descriptionSlice}</span>
      </div>
    </>
  )
}

export default Post