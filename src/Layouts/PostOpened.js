import React, { useState } from "react";

import Comment from '../Components/Coment'
import NewCommentInput from "../Components/NewCommentInput";

import './styles/PostOpened.css'

const PostFocused = (props) => {

  const {openPost, handleUnFocusPost} = props
  const {author, date, title, description, comments} = openPost

  const [wrapComments, setWrapComments] = useState(true)

  function handleWrapComments() {
    setWrapComments(!wrapComments)
  }

  return(
    <>
      <div className="post-opened">
        <button className="close-post-button" onClick={handleUnFocusPost}>
          x
        </button>
        <div className="post-opened-author">{author}</div>
        <div className="post-opened-date">{date}</div>
        <div className="post-opened-title">{title}</div>
        <div className="post-opened-description">{description}</div>
        <div className="post-opened-wrap-comments-button" onClick={() => handleWrapComments()}>{wrapComments ? 'Rozwiń Komentarze' : 'Zwiń Komentarze'}</div>
        {wrapComments ? null : <NewCommentInput/>}
        {wrapComments ? null : <div className="post-opened-comments">
          {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
        </div>}
      </div>
    </>
  )
}

export default PostFocused