//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/contact/Contact'

import './App.scss'

function App() {
  

  return (
    <div className='App'>
      <Router>
        <Routes>
          
          <Route exact path ='/' element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
    
  )
}

export default App
