import React, {useState} from "react";

import './styles/Post.css'

const NewPost = (props) => {

  let [isMoved, setIsMoved] = useState(false)

  function handlePostMove(moved) {
    setIsMoved(isMoved = moved)
  }

  return(
    <div className={isMoved ? "post-new post-moved" : 'post-new'}
      onMouseEnter={() => handlePostMove(true)} onMouseLeave={() => handlePostMove(false)}
      onClick={props.handleNewPostOpen}
    >
      +
    </div>
  )
}

export default NewPost