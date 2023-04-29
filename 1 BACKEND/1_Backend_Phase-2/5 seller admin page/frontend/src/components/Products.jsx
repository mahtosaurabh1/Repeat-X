import axios from "axios";
import React, { useEffect, useState } from "react";
import "./products.css";
function Products() {
  const [items, setItems] = useState([]);
  const [money, setMoney] = useState(0);
  const [productName, setproductName] = useState("");
  const [category, setCategory] = useState("food");
  const [flag, setFlag] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  let fetchDataFromServer = async () => {
    let result = await axios.get("http://localhost:5000/api/get");
    // console.log(result.data);
    let t = 0;
    result.data.map((val) => {
      // console.log(val);
      t += val.money;
    });
    setTotalPrice(t);
    // console.log(money);

    setItems(result.data);
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  let handleAddProducts = async () => {
    let obj = { money, productName, category };

    let result = await axios.post("http://localhost:5000/api/post", obj);
    fetchDataFromServer();
  };

  let handleDelete = async (id) => {
    let result = await axios.delete(`http://localhost:5000/api/${id}`);
    console.log(id);
    fetchDataFromServer();
  };

  return (
    <div id="expenses-container">
      <div className="expenses">
        <div className="money">
          <div>Money</div>
          <input
            type="text"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
          />
        </div>
        <div className="description">
          <div>productName</div>
          <input
            type="text"
            value={productName}
            onChange={(e) => setproductName(e.target.value)}
          />
        </div>
        <div className="category">
          <div>Category</div>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="movie">Movie</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
          </select>
        </div>
        <div>Total Price {totalPrice}</div>
        <div className="action-btn">
          <button onClick={handleAddProducts}>Add Product</button>
        </div>
      </div>

      {/* render all expenses */}

      <div id="all-expenses-items">
        {items.map((val, i) => {
          return (
            <div className="single-item">
              <div className="single-item-money">
                <p>
                  <label htmlFor="">Price</label> - {val.money}
                </p>
              </div>
              <div className="single-item-description">
                <p>
                  <label htmlFor="">ProductName</label> - {val.productName}
                </p>
              </div>
              <div className="single-item-category">
                <p>
                  <label htmlFor="">Category</label> - {val.category}
                </p>
              </div>
              <div className="actions">
                <button className="btn" onClick={() => handleDelete(val._id)}>
                  Delete
                </button>
                
              </div>
            </div>
          );
        })}
        <h3>{totalPrice}</h3>
      </div>
    </div>
  );
}

export default Products;
