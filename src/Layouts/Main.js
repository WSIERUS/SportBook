import React from "react";

import NewPostInput from '../Components/NewPostInput'
import Post from "../Components/Post";

import './styles/Main.css'

const Main = () => {
  return(
    <>
      <div className="main">
        <NewPostInput/>
        <Post/>
      </div>
    </>
  )
}

export default Main