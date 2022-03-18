import React, { useState } from "react";

import NewPostInput from '../Components/NewPostInput'
import Post from "../Components/Post";

import './styles/Main.css'

const Main = (props) => {

  const {posts, changePosts, handleAddPost} = props

  function handleAddComment(comment) {
    console.log(posts.findIndex === 3)
  }

  return(
    <>
      <div className="main">
        <NewPostInput handleAddPost={handleAddPost} userName={props.userName}/>
        <div className="posts">
          {posts.map(post => <Post handleFocusPost={props.handleFocusPost} post={post} key={post._id} handleAddComment={handleAddComment}/>)}
        </div>
      </div>
    </>
  )
}

export default Main