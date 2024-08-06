import React, {Component, useState} from "react";
import '../styles/App.css';

const dreamProjects=[
  {name:'facebook',
    desc:'socially communicationsocially communicationsocially communicationsocially communicationsocially communicationsocially communication'
  },
  {
    name:'watsapp',
    desc:'communicationcommunicationcommunicationcommunicationcommunicationcommunicationcommunicationcommunication'
  },
  {
    name:'google',
    desc:'search for anything search for anything search for anything search for anything search for anything '
  }
]

const App = () => {
  return (
    <div id="main">
      {
        dreamProjects.map((project)=>{
          return <><h1 data-ns-test='project-name'>{project.name}</h1><h6 data-ns-test='project-description'>{project.desc}</h6></>
        })
      }
    </div>
    
  )
}


export default App;
