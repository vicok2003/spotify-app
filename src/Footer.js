import React from 'react'
import './Footer.css'
import {BsPlayCircle} from 'react-icons/bs'
import {MdSkipPrevious} from 'react-icons/md'
import {MdSkipNext} from 'react-icons/md'
import {BiShuffle} from 'react-icons/bi'  
import {BsRepeat} from 'react-icons/bs'


function Footer() {
  return (
    <div className='footer'>
    <div className='footer__left'>
      <img className="footer__albumLogo" src="" alt=""></img>
      <div className='footer__songInfo'>
        <h4>yeah</h4>
        <p>Usher</p>
      </div>
    </div>

    <div className='footer__center'>
      <BiShuffle className='footer_green' />
      <MdSkipPrevious className='footer_icon' />
      <BsPlayCircle className='footer_icon' />
      <MdSkipNext className='footer_icon' />
      <BsRepeat className='footer_green' />
    </div>

    <div className='footer__right'>
    </div>
    </div>
  )
}

export default Footer
