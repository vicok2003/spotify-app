import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import { useDataLayerValue } from './DataLayer';
import { BiHome } from "react-icons/bi";
import { CiSearch } from 'react-icons/ci'
import { MdLibraryMusic } from 'react-icons/md'




function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);

  return (
    <div className='sidebar'>
      <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""></img>

      <SidebarOption Icon={BiHome} title="Home" />
      <SidebarOption Icon={CiSearch}  title="Search" />
      <SidebarOption Icon={MdLibraryMusic}  title="Your library" />
      
      <br />
      <strong className='sidebar_title'>PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  )
}

export default Sidebar;
