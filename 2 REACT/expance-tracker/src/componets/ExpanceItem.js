import React from 'react'
import './expanceitem.css'
function ExpanceItem() {
    const date=new Date(2023,1,1);
    let item='Food';
    let price=500;
    let location='delhi'
  return (
    <div className='expense-item'>
    <h1>{date.toISOString()}</h1>
    <div className='expense-item__description'>
       <h2>{item}</h2>
       <h2>{location}</h2>
       <div className='expense-item__price'>{price}</div>
    </div>
    </div>
  )
}

export default ExpanceItem