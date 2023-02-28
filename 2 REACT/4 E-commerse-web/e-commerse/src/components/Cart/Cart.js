import React, { useEffect, useState } from 'react'
import { CartState } from '../../store/cartcontext';
import './cart.css'
function Cart() {
  let [totalAmt,setTotalAmt]=useState(0);
  let {cart,setCart}=CartState();
  let products=cart;
  useEffect(()=>{
   setTotalAmt(cart.reduce((prev,cur)=>{
    return prev + Number(cur.price);
    },0))
  },[cart]);

let handleRemoveFromCart=(id)=>{
  let nArrProducts=products.filter((val)=>{
    return val.id !== id;
  })
  setCart(nArrProducts)
}
  return (
    <div className="cart-container">
      <table>
        <h3>Total Price ${totalAmt}</h3>
        <thead>
        <tr>
            <th><h2>Item</h2></th>
            <th><h2>Price</h2></th>
            <th><h2>Quantity</h2></th>
          </tr>
        </thead>
         {
          products.map((val,i)=>{
            return(
             <tbody key={i}>
               <tr >
              <td>
                <div className="title">
                  <img src={val.imageUrl} alt="" />
                  <p>{val.title}</p>
                </div>
              </td>
              <td>{val.price}</td>
              <td className='input-btn-container'>
                <input type="text" value="1"/>
                <button onClick={()=>handleRemoveFromCart(val.id)}>Remove</button>
              </td>
            </tr>
             </tbody>
            )
          })
         }
      </table>
    </div>
  )
}

export default Cart