import React from "react";

import Post from "../Components/Post";
import NewPost from "../Components/NewPost";

import './styles/Main.css'

const Main = (props) => {

  const {posts, handleNewPostOpen} = props

  return(
    <>
      <div className="main">
        <div className="posts">
          <NewPost handleNewPostOpen={handleNewPostOpen}/>
          {posts ? posts.map(post => <Post handleFocusPost={props.handleFocusPost} post={post} key={post._id} />)
            .sort((a,b) => {if(a.props.post.date > b.props.post.date) return -1}) : null
          }
        </div>
      </div>
    </>
  )
}

export default Main