import React, { useState } from "react";

import NewPostInput from '../Components/NewPostInput'
import Post from "../Components/Post";

import './styles/Main.css'

const Main = (props) => {

  let [posts, changePosts] = useState([
    {
      _id: 0,
      author:"Wojciech",
      _authorId : "wsieradzki",
      date : "2022-03-17 23:56",
      title : "post testowy", 
      photo : null,
      description : "Tutaj będzie jakiś opis", 
      comments : [
        { 
          id:0,
          author : "Janek",
          date: '2022-03-18',
          comment : "Fajne wydarzenie się szykuje",
        }
  ]}
  ])

  return(
    <>
      <div className="main">
        <NewPostInput/>
        <div className="posts">
          {posts.map(post => <Post handleFocusPost={props.handleFocusPost} post={post} key={post._id}/>)}
        </div>
      </div>
    </>
  )
}

export default Main