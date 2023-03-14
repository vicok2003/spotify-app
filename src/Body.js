import React from 'react'
import './Body.css'
import { useDataLayerValue } from './DataLayer'
import Header from './Header'
import {FaPlayCircle} from 'react-icons/fa'
import {MdFavorite} from 'react-icons/md'
import {GrMore} from 'react-icons/gr'
import SongRow from './SongRow'




function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body__info'>
        <img src={discover_weekly?.images[0].url} alt=""></img>
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className='body__songs'>
        <div className='body__icons'>
          <FaPlayCircle className='body__shuffle'/>
          <MdFavorite />
          <GrMore />
        </div>


        {discover_weekly?.tracks.items.map(item => (
          <songRow track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
