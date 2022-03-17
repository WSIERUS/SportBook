import React from "react";

import Comment from './Coment'
import NewCommentInput from './NewCommentInput'

const Post = () => {
  return(
    <>
      <div>
        <span className="post-autor">Autor</span>
        <span className="post-date">Data</span>
        <span className="post-description">Opis</span>
        <section>Fetch z komentarzami <Comment/></section>
      </div>
      <NewCommentInput/>
    </>
  )
}

export default Post