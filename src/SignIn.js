import React from 'react'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=2d8d6a98fcb7435bb9d8c25683a07ffb&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";


const SignIn = () => {
  return (
    <div className='signin-div'>
    <h2 className='sign-in-header'>welcome to spotify</h2>
    <button className='signin-text'><a href={AUTH_URL}>Sign into spotify</a></button>
    </div>
  )
}

export default SignIn