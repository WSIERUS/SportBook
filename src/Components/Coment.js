import React from "react";

const Comment = (props) => {

  const {author, date, comment} = props.comment

  return(
    <div>
      <span className="comment-author">{author}</span>
      <span className="comment-date">{date}</span>
      <span>{comment}</span>
    </div>
  )
}

export default Comment