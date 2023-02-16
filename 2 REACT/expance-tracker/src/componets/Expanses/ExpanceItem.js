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
                <div className='expense-item' key={val.id}>
                    <Card/>
                <ExpanceDate props={val}/>
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