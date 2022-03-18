import React, { useEffect, useState } from "react"

import Main from "../Layouts/Main"
import PostOpened from '../Layouts/PostOpened'

import './styles/MainPage.css'

const MainPage = () => {

  let [openPost, setOpenPost] = useState(null)

  let [userName, setUserName] = useState('Guest')

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
        <PostOpened handleUnFocusPost={handleUnFocusPost} openPost={openPost} userName={userName}/>
      </div> : null}
      <Main handleFocusPost={handleFocusPost} userName={userName}/>
    </>
  )
}


export default MainPage