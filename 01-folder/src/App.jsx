import React from 'react'
import Card from "./component/card"
import Navbar from "./component/navbar"
import spider from "./assets/spider.avif";
const App = () => {
  return (
    <div id="parent">
     <Card user="Dhruv Sharma" age={18} img={spider}/>
     <Card  user="Keshav Sharma" age={18} img="https://images.unsplash.com/photo-1642456074142-92f75cb84533?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
  
    </div>
  )
}

export default App

