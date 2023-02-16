import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpanceDate from './ExpanceDate';
import ExpanceDetails from './ExpanceDetails';
import './expanceitem.css'
let  ExpanceItem= ({props})=>{

    let [arr,setArr]=useState(props);
    let handleDelete=(id)=>{
        let nArr=props.filter((val)=>{
            return val.id != id;
        })
        setArr(nArr);
    }
  return (
    <>
    {
        arr.map((val)=>{
            return (
                // <Card className='expense-item' key={val.id}>
                <div className='expense-item' key={val.id}>
                    <Card/>
                {/* <h1>{val.date.toISOString()}</h1> */}
                <ExpanceDate props={val}/>
                {/* <div className='expense-item__description'>
                   <h2>{val.title}</h2>
                   <h2>{val.location}</h2>
                   <div className='expense-item__price'>{val.price}</div>
                </div> */}
                <ExpanceDetails props={val}/>
                <button onClick={()=>handleDelete(val.id)}>Delete Expanse</button>
                </div>
                // </Card>
            )
        })
    }
    </>
    )
}

export default ExpanceItem