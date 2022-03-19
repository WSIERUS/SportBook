import React, { useEffect, useState } from "react"

import NewPostInput from "../Layouts/NewPostInput"

import Main from "../Layouts/Main"
import PostOpened from '../Layouts/PostOpened'

import './styles/MainPage.css'

import '../Images/background.jpg'

const MainPage = () => {
  
  let [userName, setUserName] = useState('Guest')

  let [openPost, setOpenPost] = useState(null)

  let [openNewPostInput, setOpenNewPostInput] = useState(null)

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

  fetch('http://api.nbp.pl/api/exchangerates/rates/a/usd?format=json')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))

  function handleNewPostOpen() {
    setOpenNewPostInput(openNewPostInput = true)
  }

  function handleCloseAddPost() {
    setOpenNewPostInput(openNewPostInput = false)
  }

  function handleAddPost(title, description) {
    if(title.length >= 1 && description.length >= 5){const index = posts.length
    const date = new Date()
    changePosts(oldPost => [...oldPost, {
      _id:index,
      author: userName ? userName : 'Geust',
      _authorId: userName,
      date: `${date.getFullYear()}-${("0" + (date.getMonth()+1)).slice(-2)}-${("0" + date.getDate()).slice(-2)} ${date.getHours()}:${date.getMinutes()}`,
      title: title,
      photo: null,
      description: description,
      comments:[]
    }])
    handleCloseAddPost()}
    else alert('Post musi posiadać tytuł i minimum 5 znaków w opisie')
  }

  function handleAddComment(comment, posts, openPost) {
    if(comment.length <= 0) {
      return alert("kometarz musi zawierać minimum jeden znak")
    }
    const date = new Date()
    const commentToObject = {
      _id: openPost.comments.length,
      author: userName ? userName : "Guest",
      date: `${date.getFullYear()}-${("0" + (date.getMonth()+1)).slice(-2)}-${("0" + date.getDate()).slice(-2)} ${date.getHours()}:${date.getMinutes()}`,
      comment: comment
    }
    posts.find(post => post._id === openPost._id).comments[openPost.comments.length] = commentToObject
    changePosts(oldPost => [...oldPost])
  }

  function handleFocusPost(post) {
    setOpenPost(openPost = post)
  }

  function handleUnFocusPost() {
    setOpenPost(openPost = null)
  }

  useEffect(() => {
    setUserName(userName = window.prompt('Podaj swój Nick'))
  }, [1])

  return(
    <>
      {openNewPostInput ? 
        <NewPostInput handleAddPost={handleAddPost} handleCloseAddPost={handleCloseAddPost}/>
      : null}
      {openPost ? <div className="main-post">
        <PostOpened handleUnFocusPost={handleUnFocusPost} openPost={openPost} userName={userName} handleAddComment={handleAddComment} posts={posts}/>
      </div> : null}
      <Main handleFocusPost={handleFocusPost} userName={userName} posts={posts} changePosts={changePosts} handleAddPost={handleAddPost} handleNewPostOpen={handleNewPostOpen}/>
    </>
  )
}


export default MainPage