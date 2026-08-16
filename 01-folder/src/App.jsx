import React from 'react'
import Card from "./component/card"
import Navbar from "./component/navbar"

const App = () => {
  return (
    <div id="parent">
     <Card user="Dhruv Sharma" age={18}/>
     <Card  user="Keshav Sharma" age={18}/>
  
    </div>
  )
}

export default App

