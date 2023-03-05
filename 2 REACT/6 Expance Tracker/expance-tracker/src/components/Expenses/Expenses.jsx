import React, { useState } from 'react'
import './expenses.css'
function Expenses() {
    const [items,setItems]=useState([]);
    const [money,setMoney]=useState(0);
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('food');

    let handleAddExpenses=()=>{
       let obj={money,description,category}
       setItems([...items,obj]);
    }

  return (
    <div className="expenses-main-container">
        <div className="form-container">
            <div className="money">
                <label htmlFor="">Money</label>
                <input type="text" value={money} onChange={(e)=>setMoney(e.target.value)} />
            </div>
            <div className="description">
                <label htmlFor="">Description</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="category">
                <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value='movie'>Movie</option>
                    <option value='food'>Food</option>
                    <option value='travel'>Travel</option>
                </select>
            </div>
        </div>
        <div className="btn">
            <button onClick={handleAddExpenses}>Add Expenses</button>
        </div>

        {/* render all expenses */}

        <div className="all-expenses-items">
            {
                items.map((val)=>{
                    return(
                        <div className="single-item">
                           <div className="single-item-money">
                            <p>{val.money}</p>
                           </div>
                           <div className="single-item-description">
                            <p>{val.description}</p>
                           </div>
                           <div className="single-item-category">
                            <p>{val.category}</p>
                           </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Expenses