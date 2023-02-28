import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartState } from '../../store/context';
import './header.css'
function Header() {
    let {cart}=CartState();

  return (
   <div className="header-container">
    <div className="menu">
        <Link to='/home' className='Link'><div>Home</div></Link>
        <Link to='/' className='Link'><div>Store</div></Link>
        <Link to='/about'  className='Link'><div>About</div></Link>
    </div>
    <div className="btn">
        <Link to='/cart'><button>Cart {cart.length}</button></Link>
    </div>

   </div>
  )
}

export default Header