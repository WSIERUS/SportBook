import React from "react";

import './styles/Post.css'

const NewPost = (props) => {
  return(
    <div className="post" 
    style={{
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: "1.5cm",
      width: '5cm',
      cursor: 'pointer'
    }}
    onClick={props.handleNewPostOpen}
    >
      +
    </div>
  )
}

export default NewPost