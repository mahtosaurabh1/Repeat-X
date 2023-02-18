import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
    function handleLogout(){
        localStorage.clear();
    }
  return (
    <div>
        <Link to='/login'><button onClick={handleLogout}>Logout</button></Link>
    </div>
  )
}

export default Home