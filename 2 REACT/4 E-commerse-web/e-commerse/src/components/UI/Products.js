import React from "react";
import { CartContext, CartState } from "../../store/context";
import ProductsArr from "../assets/productList";
import "./products.css";
function Products() {

  let {products,setCart,cart}=CartState();
  let productArr =products;

  let handleAddtoCart=(val)=>{
    if(cart.includes(val)){
      alert('item already added');
      return;
    }
    setCart([...cart,val]);
  }

  return (
    <div className="product-container">
      {productArr.map((val, i) => {
        return (
          <div className="card" key={i}>
            <div className="title">{val.title}</div>
            <img
              src={val.imageUrl}
              alt=""
            />
            <div className="btn-price-container">
              <div className="price">{val.price}</div>
              <button onClick={()=>handleAddtoCart(val)} >Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
