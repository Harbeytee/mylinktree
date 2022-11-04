import React from 'react'
import zuri from '../assets/zuri-logo.svg'
import i4g from '../assets/i4glogo.svg'
export default function Footer() {
  return (
    <>
    
    <div className="line"></div>
    <footer>
      <img src={zuri} alt="zuri logo" className="zuri-logo" />
      <p className='footer-text'>HNG Internship 9 Frontend Task</p>
      <img src={i4g} alt="i4g logo" className="i4g-logo" />
    </footer>
    </>
  )
}
