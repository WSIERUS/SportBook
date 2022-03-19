import React, { useState } from "react";

import Post from "../Components/Post";
import NewPost from "../Components/NewPost";

import './styles/Main.css'

const Main = (props) => {

  const {posts, handleAddPost, handleNewPostOpen} = props

  function handleAddComment(comment) {
    console.log(posts.findIndex === 3)
    console.log(posts, comment)
  }

  return(
    <>
      <div className="main">
        <div className="posts">
          <NewPost handleNewPostOpen={handleNewPostOpen}/>
          {posts.map(post => <Post handleFocusPost={props.handleFocusPost} post={post} key={post._id} handleAddComment={handleAddComment}/>)}
        </div>
      </div>
    </>
  )
}

export default Main