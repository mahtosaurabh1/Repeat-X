import React, { useContext, useState } from 'react'
import { ProductContext } from '../../store/productcontext'
import './cart.css'
function Cart() {
    let productCtx=useContext(ProductContext);

  return (
    <div className="cart-container">
     <h1>Cart Container</h1>
     {
        productCtx.cart.map((val)=>{
            return(
                <div className="abc">
                    <span>{val.shoeName}</span><span>{val.price}</span><span>{val.small}</span><span>{val.medium}</span><span>{val.large}</span><span>{val.description}</span>
                </div>
            )
        })
     }
    </div>
  )
}

export default Cart