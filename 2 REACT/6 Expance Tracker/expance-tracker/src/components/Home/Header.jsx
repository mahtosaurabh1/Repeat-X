import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
function Header() {
  return (
    <div className="header-container">
      <h3>Welcome to Expanse tracker</h3>
      <p>Your Profile is Incomple <Link to='/profile'><button>Complete Now</button></Link></p>
    </div>
  )
}

export default Header