import React from 'react'
import ProductsArr from '../assets/productList'
import './cart.css'
function Cart() {
  let products=ProductsArr;


  return (
    <div className="cart-container">
      <table>
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
                <input type="text" value="5"/>
                <button>Remove</button>
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