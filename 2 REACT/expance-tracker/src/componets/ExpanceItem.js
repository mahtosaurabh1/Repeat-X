import React from 'react'
import './expanceitem.css'
function ExpanceItem({props}) {
    const date=new Date(2023,1,1);
    let item='Food';
    let price=500;
    let location='delhi'
    console.log(props);
  return (
    <>
    {
        props.map((val)=>{
            return (
                <div className='expense-item' key={val.id}>
                <h1>{val.date.toString()}</h1>
                <div className='expense-item__description'>
                   <h2>{val.title}</h2>
                   <h2>{val.location}</h2>
                   <div className='expense-item__price'>{val.price}</div>
                </div>
                </div>
            )
        })
    }
    </>
    )
}

export default ExpanceItem