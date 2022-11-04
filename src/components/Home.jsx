import React from 'react'
import Profile from './Profile'
import Links from './Links'
import slack from '../assets/slack.svg'
import github from '../assets/github.svg'
import zuri from '../assets/zuri-logo.svg'
import i4g from '../assets/i4glogo.svg'
export default function Home() {
  return (
    <>
    <Profile />

    <Links />

    <div className="code">
      <img src={slack} alt="slack logo" className="slack-logo" />
      
      <a href="https://github.com/Harbeytee/mylinktree"><img src={github} alt="github logo" className="source-code" /></a>
    </div>

    <div className="line"></div>

    <footer>
      <img src={zuri} alt="zuri logo" className="zuri-logo" />
      <p className='footer-text'>HNG Internship 9 Frontend Task</p>
      <img src={i4g} alt="i4g logo" className="i4g-logo" />
    </footer>
    
    
  </>
  )
}
