import React from "react";

import ButtonHeadBar from "../Components/ButtonHeadBar";

import './styles/Head.css'

const HeadButtons = [
  {id:1, name:'Strona Główna', route:() => {console.log('strona główna')}},
  {id:2, name:'Ustawienia konta', route:() => {console.log('ustawienia konta')}},
]

const Head = () => {
  return(
    <div className="head-bar">
      <div className="head-bar-control-panel">
        {HeadButtons.map(button => (<ButtonHeadBar key={button.id} button={button}/>))}
      </div>
      <div className="head-bar-control-panel">
        <ButtonHeadBar key='Login-Button' button={{name:'Zaloguj', route:()=>{console.log('Logowanie')}}}/>
      </div>
    </div>
  )
}

export default Head