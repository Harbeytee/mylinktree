import React from 'react'
import pic from '../assets/pic.svg'
export default function Profile() {
  return (
    <div className='profile'>
        <img src={pic} alt="a profile picture" id='profile__img' />
        <span id="twitter">@Abbycodess</span>
        {/*<span id="slack">@Abbytee</span>*/}
    </div>
  )
}
