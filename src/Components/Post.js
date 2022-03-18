import React from "react";

import './styles/Post.css'

const Post = (props) => {

  const {author, date, title, description} = props.post

  return(
    <>
      <div className="post" onClick={() => props.handleFocusPost(props.post)}>
        <span className="post-author">{author}</span>
        <span className="post-date">{date}</span>
        <span className="post-title">{title}</span>
        <span className="post-description">{description}</span>
      </div>
    </>
  )
}

export default Post