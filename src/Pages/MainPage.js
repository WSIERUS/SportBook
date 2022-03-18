import React, { useState } from "react"

import Main from "../Layouts/Main"
import PostOpened from '../Layouts/PostOpened'

import './styles/MainPage.css'

const MainPage = () => {

  let [openPost, setOpenPost] = useState(null)

  function handleFocusPost(post) {
    setOpenPost(openPost = post)
  }

  function handleUnFocusPost() {
    setOpenPost(openPost = null)
  }

  return(
    <>
      {openPost ? <div className="main-post">
        <PostOpened handleUnFocusPost={handleUnFocusPost} openPost={openPost}/>
      </div> : null}
      <Main handleFocusPost={handleFocusPost}/>
    </>
  )
}

export default MainPage