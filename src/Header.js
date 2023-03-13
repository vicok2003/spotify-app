import React from 'react'
import './Header.css'
import { CiSearch } from 'react-icons/ci'
import { RxAvatar } from 'react-icons/rx'
import { useDataLayerValue } from './DataLayer'


function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className='header'>
      <div className='header__left'>
        <CiSearch />
        <input placeholder="Search for Artists, Songs or Podcasts" type="text"/>
      </div>

      <div className='header__right'>
        <RxAvatar  src={user?.images[0]?.url} alt={user?.display_name}/>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header
