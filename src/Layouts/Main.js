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
      title : "Tytuł jakiś tam", 
      photo : null,
      description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores debitis sint a distinctio quidem, laudantium culpa itaque aspernatur iste voluptatem facere cum eius cumque officia veritatis impedit quasi quae non.", 
      comments : [
        { 
          _id: 0,
          author : "Janek",
          date: '2022-03-18',
          comment : "Fajne wydarzenie się szykuje",
        },
        { 
          _id: 1,
          author : "Marek",
          date: '2022-03-19',
          comment : "Słabo, że nei u mnie",
        }
  ]},
  {
    _id: 1,
    author:"Wojciech",
    _authorId : "wsieradzki",
    date : "2022-03-17 23:56",
    title : "Tytuł jakiś tam", 
    photo : null,
    description : "Lorem, ipsum dolor aspernatur istmpedit quasi quae non.", 
    comments : [
      { 
        _id: 0,
        author : "Janek",
        date: '2022-03-18',
        comment : "Kijowe wydarzenie",
      },
      { 
        _id: 1,
        author : "Marek",
        date: '2022-03-19',
        comment : "Ale fajnie",
      }
]}
  ])

  function handleAddPost(description, user) {
    const index = posts.length
    const date = new Date()
    changePosts(oldPost => [...oldPost, {
      _id:index,
      author: user,
      _authorId: user,
      date: `${date.getFullYear()}-${("0" + (date.getMonth()+1)).slice(-2)}-${("0" + date.getDate()).slice(-2)} ${date.getHours()}:${date.getMinutes()}`,
      title: 'jakiś',
      photo: null,
      description: description,
      comments:[]
    }])
    console.log(posts)
  }

  return(
    <>
      <div className="main">
        <NewPostInput handleAddPost={handleAddPost} userName={props.userName}/>
        <div className="posts">
          {posts.map(post => <Post handleFocusPost={props.handleFocusPost} post={post} key={post._id}/>)}
        </div>
      </div>
    </>
  )
}

export default Main