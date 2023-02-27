import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
function Header() {
  return (
   <div className="header-container">
    <div className="menu">
        <Link to='/home' className='Link'><div>Home</div></Link>
        <Link to='/' className='Link'><div>Store</div></Link>
        <Link to='/about'  className='Link'><div>About</div></Link>
    </div>
    <div className="btn">
        <button>Cart</button>
    </div>
   </div>
  )
}

export default Header