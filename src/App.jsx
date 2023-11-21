import { useState } from 'react'
import './App.css'
import { HomeScreen } from './pages/home/home_screen'
import { StoreScreen } from './Pages/store/store_screen'
import { AboutScreen } from './Pages/about/about_screen'
import { ContactScreen } from './Pages/contact/contact_screen'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/about' element={<AboutScreen/>}/>
        <Route path='/store' element={<StoreScreen/>}/>
        <Route path='/contact' element={<ContactScreen/>}/>
      </Routes>
    </BrowserRouter>  
  )
}

export default App
