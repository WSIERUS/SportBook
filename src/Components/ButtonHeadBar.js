import React, { useState } from "react";

import './styles/ButtonHeadBar.css'

const ButtonHeadBar = ({button}) => {

  let [isMoved, setIsMoved] = useState(false)

  function checkMoved(state) {
      setIsMoved(isMoved = state)
  }

  return(
    <button 
      onClick={button.route}
      onMouseEnter={() => checkMoved(true)} 
      onMouseLeave={() => checkMoved(false)} 
      className= {isMoved ? 'button-head-bar-moved' : 'button-head-bar'}
    >
      {button.name}
    </button>
  )
}

export default ButtonHeadBar