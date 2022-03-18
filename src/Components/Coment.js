import React from "react";

import './styles/Comment.css'

const Comment = (props) => {

  const {author, date, comment} = props.comment

  return(
    <div className="comment">
      <span className="comment-author">{author}</span>
      <span className="comment-date">{date}</span>
      <span className="comment-comment">{comment}</span>
    </div>
  )
}

export default Comment