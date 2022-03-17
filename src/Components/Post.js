import React from "react";

import Comment from './Coment'
import NewCommentInput from './NewCommentInput'

import './styles/Post.css'

const Post = () => {
  return(
    <>
      <div className="post">
        <span className="post-author">Wojciech Sieradzki</span>
        <span className="post-date">2022-03-17 23:56</span>
        <span className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolores deserunt sequi nemo minima molestias praesentium! Ex culpa vitae atque, sed delectus odio fugiat error minus, quia temporibus rerum voluptatem!</span>
        <NewCommentInput/>
        <section className="post-comments">Fetch z komentarzami <Comment/></section>
      </div>
    </>
  )
}

export default Post