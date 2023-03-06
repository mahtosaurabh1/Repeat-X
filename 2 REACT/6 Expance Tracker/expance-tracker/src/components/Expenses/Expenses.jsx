import React, { useEffect, useState } from 'react'
import './expenses.css'
function Expenses() {
    const [items,setItems]=useState([]);
    const [money,setMoney]=useState(0);
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('food');



    let fetchDataFromServer= async ()=>{
        let res= await fetch('https://expense-tracker-217da-default-rtdb.firebaseio.com/expense-item.json');
         let data= await res.json();
         let loadItem=[];
         for(let key in data){
           loadItem.push({
               id:key,
               money:data[key].money,
               description:data[key].description,
               category:data[key].category
             });
         }
         setItems(loadItem);
 
   }

   useEffect(()=>{
    fetchDataFromServer();
   },[])

    let handleAddExpenses=()=>{
       let obj={money,description,category}
       setItems([...items,obj]);

        fetch('https://expense-tracker-217da-default-rtdb.firebaseio.com/expense-item.json',{
            method:'POST',
            body:JSON.stringify({
               money:money,
               description:description,
               category:category,
               returnSecureToken:true
            }),
            headers:{
             'Content-Type':'application/json'
            }
           }).then(res=>{
           }).catch((err)=>{
            alert(err.message);
            return;
           })
    
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