import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../store/context';
import Cart from '../Cart/Cart';
import './header.css'
function Header() {

  let cartContext=useContext(CartContext);
  console.log("dcsc",cartContext.showCart);

  const [cartShow,setCartShow]=useState(cartContext.showCart);


  return (
   <div className="header-container">
    <div className="menu">
        <Link to='/home' className='Link'><div>Home</div></Link>
        <Link to='/' className='Link'><div>Store</div></Link>
        <Link to='/about'  className='Link'><div>About</div></Link>
    </div>
    <div className="btn">
        <button onClick={()=>setCartShow(!cartShow)}>Cart</button>
    </div>
    <div className="cartContainerShown">
            {cartShow &&<Cart/>}
        </div>
   </div>
  )
}

export default Header