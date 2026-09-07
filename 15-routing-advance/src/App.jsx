import React from 'react'
import Navbar from '../components/Navbar'
import Foooter from '../components/Foooter'
import Home from './pages/Home'
import About from './pages/about'
import Product from './pages/product'
import NotFound from './pages/NotFound'
import Women from './pages/Women'
import Mens from './pages/Mens'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}>
      <Route path='Mens' element={<Mens/>}/>
      <Route path='Women' element={<Women/>}/>
      </Route>
      <Route path='*' element={<NotFound/>}/>
      
  
    </Routes>
<Foooter/>

    </div>
  )
}

export default App