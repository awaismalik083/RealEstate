import React from 'react'

import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Property from './pages/Property'
import Page from './pages/Page'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route  path='/' element={<Home/>}/>
          <Route  path='/property' element={<Property/>}/>
          <Route  path='/page' element={<Page/>}/>
          <Route  path='/blog' element={<Blog/>}/>
          <Route  path='/contact' element={<Contact/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route  path='/signup' element={<Signup/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App