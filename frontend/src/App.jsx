import { useState } from 'react'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Home } from './pages/Home'
import { BrowserRouter ,Routes , Route } from 'react-router-dom'
import { RegularFit } from './pages/Regularfit'
import { Oversize } from './pages/Oversize'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/regularfit' element={<RegularFit/>}/>
      <Route path='/oversize' element={<Oversize/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
