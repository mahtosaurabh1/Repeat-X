import React from "react";
import { useNavigate } from "react-router-dom";
import { CartState } from "../../store/cartcontext";
import "./products.css";
function Products() {
  let navigate=useNavigate();
  let {products,setCart,cart}=CartState();
  let productArr =products;

  let handleAddtoCart=(val)=>{
    if(cart.includes(val)){
      alert('item already added');
      return;
    }
    setCart([...cart,val]);
  }

  let previewPageHandler=(id)=>{
    let singlePrdct=products.filter((val)=>{
      return val.id===id;
    })
    // console.log(singlePrdct);
    navigate(`/preview/${id}`);
    
  }

  return (
    <div className="product-container">
      {productArr.map((val, i) => {
        return (
          <div className="card" key={i}>
            <div className="title">{val.title}</div>
            <img onClick={()=>previewPageHandler(val.id)}
              src={val.imageUrl}
              alt=""
            />
            <div className="btn-price-container">
              <div className="price">{val.price}</div>
              <button onClick={()=>handleAddtoCart(val)} className='btn'>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
