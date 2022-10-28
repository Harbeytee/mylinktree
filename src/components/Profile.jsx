import React from 'react'
import pic from '../assets/pic.svg'
import shareIcon from '../assets/share-icons.svg'
import shareDots from '../assets/share-dots.svg'
import toolTip from '../assets/tooltip.svg'

export default function Profile() {
  return (
    <div className='profile'>
        <img src={pic} alt="a profile picture" id='profile__img' />
        <span id="twitter">@Abbycodess</span>
        <div className='share-btn'>
          <img src={shareDots} alt="share button" className="share-dot" />
          <img src={shareIcon} alt="share button" className="share-icon" />
          <img src={toolTip} alt="tooltip" className="tool-tip" />
        </div>
        <span id="slack">@Abbytee</span>
    </div>
  )
}
