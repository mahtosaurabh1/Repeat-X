import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../store/productcontext'
import './cart.css'
function Cart() {
    let productCtx=useContext(ProductContext);
    let [totalP,setPrice]=useState(productCtx.cart.reduce((t,curr)=>{
      return t + Number(curr.price)
    },0))
    let fetchDataFromServer= async ()=>{
      let res= await fetch('https://shoe-store-2f70c-default-rtdb.firebaseio.com/cart.json');
       let data= await res.json();
       let loadItem=[];
       for(let key in data){
         loadItem.push({
             id:key,
             shoeName:data[key].shoeName,
             price:data[key].price,
             small:data[key].small,
             medium:data[key].medium,
             large:data[key].large,
             description:data[key].description
           });
         
       }
       productCtx.setCart(loadItem)
 }

 useEffect(()=>{
  fetchDataFromServer();
 },[])


  return (
    <div className="cart-container">
     <h1>Cart Container</h1>
     {
        productCtx.cart.map((val)=>{
            return(
                <div className="abc">
                    <span>{val.shoeName}</span><span>{val.price}</span><span>{val.description}</span>
                  
                    {val.small && <span>S- {val.small}</span> }
                    {val.medium &&  <span>M- {val.medium}</span>}
                    {val.large &&  <span>L- {val.large}</span>}
                </div>
            )
        })
     }
     <h1>{totalP}</h1>
    </div>
  )
}

export default Cart