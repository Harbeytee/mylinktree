import React from 'react'
import Profile from './Profile'
import Links from './Links'
import slack from '../assets/slack.svg'
import github from '../assets/github.svg'

import Footer from './Footer'
export default function Home() {
  return (
    <>
    <Profile />

    <Links />

    <div className="code">
      <img src={slack} alt="slack logo" className="slack-logo" />
      
      <a href="https://github.com/Harbeytee/mylinktree"><img src={github} alt="github logo" className="source-code" /></a>
    </div>

    
    

    <Footer />
    
    
    
  </>
  )
}
