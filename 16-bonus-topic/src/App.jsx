import React, { useState } from 'react'
import Navbar from './Navbar'
//here we learn st send data  child to parent 

const App = () => {
  const [theme,SetTheme]=useState("light")
  return (
    <div>
<h1>Theme is {theme}</h1>
<Navbar theme={theme}  SetTheme={SetTheme}/>
    </div>
  )
}

export default App
