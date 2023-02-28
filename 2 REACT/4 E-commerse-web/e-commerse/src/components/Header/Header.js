import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartState } from '../../store/context';
import './header.css'

function Header() {
    let {cart}=CartState();

  return (
   <div className="header-container">
    <div className="menu">
        <NavLink to='/home' className='Link'><div>Home</div></NavLink>
        <NavLink to='/' className='Link'><div>Store</div></NavLink>
        <NavLink to='/about'  className='Link'><div>About</div></NavLink>
    </div>
    <div className="btn">
        <NavLink to='/cart'><button>Cart {cart.length}</button></NavLink>
    </div>

   </div>
  )
}

export default Header