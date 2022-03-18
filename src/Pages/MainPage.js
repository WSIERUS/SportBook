import React, { useEffect, useState } from "react"

import Main from "../Layouts/Main"
import PostOpened from '../Layouts/PostOpened'

import './styles/MainPage.css'

const MainPage = () => {

  let [openPost, setOpenPost] = useState(null)

  let [userName, setUserName] = useState('Guest')

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

  function handleAddComment(comment) {
    const array = openPost
    console.log(openPost._id) // Komentarze do postu
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
      {openPost ? <div className="main-post">
        <PostOpened handleUnFocusPost={handleUnFocusPost} openPost={openPost} userName={userName} handleAddComment={handleAddComment} posts={posts}/>
      </div> : null}
      <Main handleFocusPost={handleFocusPost} userName={userName} posts={posts} changePosts={changePosts} handleAddPost={handleAddPost}/>
    </>
  )
}


export default MainPage