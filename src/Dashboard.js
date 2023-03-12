import React from 'react'
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const accessToken = new URLSearchParams(location.search).get('access_token');
  
  // Use the accessToken to make requests to the Spotify API

  return (
    <div>
      <div className='sidebar'>
        <h3>Dashboard</h3>
        <br/>
        <br/>
        <h3 className='s-h3'>Spotify</h3>
        <br/>
        <h4 className='label'>Library</h4>
        <div className='container'>
          <div><a href='#'>Home</a></div>
          <div><a href='#'> Favourites Songs</a></div>
          <div><a href='#'> Artist</a></div>
          <div><a href='#'> Albums</a></div>
          {/* <img src={ImgIcon} onClick={iconClick} alt="" id="icon"/> */}
        </div>
  
        {/* Rth-sidebar */}
        <div className='rth-sidebar'>
        <h3>Shortcuts</h3>
        <br/>
        <div className='shortcuts'>
          <div className='srt-childs'><a href="#">Chill Hits</a></div>
          <div className='srt-childs'><a href="#">Hop</a></div>
          <div className='srt-childs'><a href="#">Accoustic</a></div>
          <div className='srt-childs'><a href="#">Indie Pop</a></div>
          <div className='srt-childs'><a href="#">Piano Blues</a></div>
          <div className='srt-childs'><a href="#">Jazz</a></div>
        </div>
        <br/>
        <br/>
  
        <h4 className='rth-label'>Fav Artist</h4>
        <div className='rth-container'>
          <div><a href='#'>Ayra starr</a></div>
          <div><a href='#'>Dax</a></div>
          <div><a href='#'>Burna Boy</a></div>
          <div><a href='#'>Sofie Dossy</a></div>
        </div>
  
        <div className='card'>
            <div className='card-header'>
                <img src="" alt=""/>
                <h2>Artist Name</h2>
                <p>Album Title</p>
            </div>
          <div className='card-body'>
              <p>Release Date: January 1, 2021</p>
              <p>Genre: Pop</p>
              <p>Label: Mount Music Group</p>
              <p>Description: lorem ipsum dolor sit amet, consuter</p>
          </div>
          <div className='card-footer'>
              <a href="#">Buy on iTunes</a>
          </div>
        </div>
  
        </div>
      </div>
  
      <div className='body-cont'>
        
        <input type='text' placeholder='Search' className='search-bar'/>
  
        <h5>What's Hot</h5>
        <div className='trending-flex'>
        <h2>Trending</h2>
        <a href="#">More</a>
        </div>
        
        <br/>
        <div className='trending-img'>
        <img src="" alt="Trending img"/>
        </div>
       
        {/* table-div */}
        <div>
          <div className='table-head'>
          <h2>My Playlist</h2>
          <a href='#'>Show All</a>
          </div>
          
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Time</th>
                <th>Album</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Song Title</td>
                <td>Artist 1</td>
                <td>5:30</td>
                <td>Ablum 1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Song Title</td>
                <td>Artist 2</td>
                <td>3:40</td>
                <td>Ablum 8</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Song Title</td>
                <td>Artist 3</td>
                <td>6:25</td>
                <td>Ablum 4</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Song Title</td>
                <td>Artist 4</td>
                <td>11:30</td>
                <td>Ablum 7</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Song Title</td>
                <td>Artist 5</td>
                <td>7:30</td>
                <td>Ablum 15</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Song Title</td>
                <td>Artist 6</td>
                <td>1:30</td>
                <td>Ablum 15</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Song Title</td>
                <td>Artist 7</td>
                <td>6:02</td>
                <td>Ablum 15</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Song Title</td>
                <td>Artist 8</td>
                <td>11:37</td>
                <td>Ablum 15</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Song Title</td>
                <td>Artist 9</td>
                <td>1:00</td>
                <td>Ablum 15</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Song Title</td>
                <td>Artist 10</td>
                <td>2:10</td>
                <td>Ablum 15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
   
    
  
  )
}

export default Dashboard;

