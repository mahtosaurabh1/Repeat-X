import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart';
import './header.css'
function Header() {
  const [cartShow,setCartShow]=useState(false);
  let handleCartBtn=()=>{
    setCartShow(true);
  }

  let handleRemoveBtn=()=>{
    console.log("Rfre");
    setCartShow(false);
  }
  return (
   <div className="header-container">
    <div className="menu">
        <Link to='/home' className='Link'><div>Home</div></Link>
        <Link to='/' className='Link'><div>Store</div></Link>
        <Link to='/about'  className='Link'><div>About</div></Link>
    </div>
    <div className="btn">
        <button onClick={handleCartBtn}>Show Cart</button>
        <button  onClick={handleRemoveBtn}>Remove Cart</button>
    </div>
    <div className="cartContainerShown">
            {cartShow &&  <Cart />}
        </div>
   </div>
  )
}

export default Header