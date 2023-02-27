import React from "react";
import ProductsArr from "../assets/productList";
import "./products.css";
function Products() {
  let productArr = ProductsArr;
  console.log(productArr);
  return (
    <div className="product-container">
      {productArr.map((val, i) => {
        return (
          <div className="card">
            <div className="title">{val.title}</div>
            <img
              src={val.imageUrl}
              alt=""
            />
            <div className="btn-price-container">
              <div className="price">{val.price}</div>
              <button>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
