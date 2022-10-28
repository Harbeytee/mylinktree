import { useState } from 'react'
import slack from './assets/slack.svg'
import github from './assets/github.svg'
import Profile from './components/Profile'
import Links from './components/Links'
import zuri from './assets/zuri-logo.svg'
import i4g from './assets/i4glogo.svg'
import './App.css'

function App() {
  

  return (
    <div className="App">
      <Profile />

      <Links />

      <div className="code">
        <img src={slack} alt="slack logo" className="slack-logo" />
        
        <img src={github} alt="github logo" className="source-code" />
      </div>

      <div className="line"></div>

      <footer>
        <img src={zuri} alt="zuri logo" className="zuri-logo" />
        <p className='footer-text'>HNG Internship 9 Frontend Task</p>
        <img src={i4g} alt="i4g logo" className="i4g-logo" />
      </footer>
      
    </div>
  )
}

export default App
