import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Help from './assets/pages/Help'

// nmp i reac-router-dom


const App = () => {
  return (
    <div>
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