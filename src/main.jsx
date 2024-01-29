import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './scss/styles.scss'
import './js/main.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'
import Page404 from './pages/Page404'
import Register from './pages/register'
import Login from './pages/login'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='*' element={<Page404/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

 