import React, { useEffect, useState } from 'react'
import './expenses.css'
function Expenses() {
    const [items,setItems]=useState([]);
    const [money,setMoney]=useState(0);
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('food');
    const [flag,setFlag]=useState(true);
    const [id,setId]=useState('');
    const [totalPrice,setTotalPrice]=useState(0);
    const [tChange,setTChange]=useState(true)



    let fetchDataFromServer= async ()=>{
        let res= await fetch('https://expense-tracker-217da-default-rtdb.firebaseio.com/expense-item.json');
         let data= await res.json();
         let loadItem=[];
         let total=0;
         for(let key in data){
           loadItem.push({
               id:key,
               money:data[key].money,
               description:data[key].description,
               category:data[key].category
             });
             total += Number(data[key].money);
         }
         setTotalPrice(total);
         setItems(loadItem);
 
   }

   useEffect(()=>{
    fetchDataFromServer();
   },[])

    let handleAddExpenses=()=>{
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
            fetchDataFromServer();
           }).catch((err)=>{
            alert(err.message);
            return;
           })
    
    }

    let handleDelete=async (id)=>{
        await fetch(`https://expense-tracker-217da-default-rtdb.firebaseio.com/expense-item/${id}.json`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          fetchDataFromServer();
    }

    let handleEdit=(idx,itemId)=>{
        setMoney(items[idx].money)
        setDescription(items[idx].description)
        setCategory(items[idx].category);
        setId(itemId);
        if(flag){
            setFlag(!flag);
        }
    }

    let handleUpdate=()=>{
        
        fetch(`https://expense-tracker-217da-default-rtdb.firebaseio.com/expense-item/${id}.json`,{
            method:'PUT',
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
            fetchDataFromServer();
           }).catch((err)=>{
            alert(err.message);
            return;
           })
        setFlag(!flag);
    }

    const handleThemeChange=()=>{
      if(tChange){
        let a=document.querySelector('.expenses');
        a.classList.add('theme');
        setTChange(false)
      }else{
        let a=document.querySelector('.expenses');
        a.classList.remove('theme');
        setTChange(true)
      }

    }
   

  return (
    <div className="expenses-container">
        <div className="expenses">
            <div className="money">
                <label htmlFor="">Money</label>
                <input type="text" value={money} onChange={(e)=>setMoney(e.target.value)} />
            </div>
            <div className="description">
                <label htmlFor="">Description</label>
                <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="category">
                <label htmlFor="">Category</label>
                <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value='movie'>Movie</option>
                    <option value='food'>Food</option>
                    <option value='travel'>Travel</option>
                </select>
            </div>
            <div>Total Price {totalPrice}</div>
            <div className="btn">
        {flag && <button onClick={handleAddExpenses}>Add Expenses</button>}
        {!flag && <button onClick={handleUpdate}>Update Expenses</button>}
          {totalPrice >=10000 && <button onClick={handleThemeChange}>Theme Change</button>}
        </div>
        </div>
       

        {/* render all expenses */}

        <div className="all-expenses-items">
            {
                items.map((val,i)=>{
                    return(
                        <div className="single-item">
                           <div className="single-item-money">
                            <p><label htmlFor="">Price</label> - {val.money}</p>
                           </div>
                           <div className="single-item-description">
                            <p><label htmlFor="">Desc</label> - {val.description}</p>
                           </div>
                           <div className="single-item-category">
                            <p><label htmlFor="">Category</label> - {val.category}</p>
                           </div>
                           <div className="actions">
                           <button className='btn' onClick={()=>handleDelete(val.id)}>Delete</button>
                           <button className="btn" onClick={()=>handleEdit(i,val.id)} >Edit</button>
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