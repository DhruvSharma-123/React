import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Help from './assets/pages/Help'
import { Link } from 'react-router-dom'

// nmp i reac-router-dom


const App = () => {
  return (
        <div>
    <div id="nav">
      <div id="nav1">Navbar</div>
      <div id="link">
        {/* //If we use anchor tag to call raouter links then it will relode the browser page so we use link to solve it  */}
        {/* <a href="./">Home</a>
        <a href="./about">About</a>
        <a href="./help">Help</a> */}
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/help'>Help</Link>
      </div>
    </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
           <Route path="/help" element={<Help />} />

      </Routes>
    </div>
  )
}

export default App
// App

// import { Routes, Route } from 'react-router-dom'

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<h1>HOME PAGE</h1>} />
//       <Route path="/about" element={<h1>ABOUT PAGE</h1>} />
//     </Routes>
//   )
// }

// export default App