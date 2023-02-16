import React, { useState } from 'react'

let ExpanceDetails=(props)=>{
  const [price,setPrice]=useState(props.props.price);
  let updatePrice=(id)=>{
    setPrice(100);
   }
  return (
    <>
            <div className='expense-item__description'>
                   <h2>{props.props.title}</h2>
                   <h2>{props.props.location}</h2>
                   <div className='expense-item__price'>${price}</div>
                   <button onClick={()=>updatePrice(props.props.id)}>update price</button>
                </div>
    </>
  )
}

export default ExpanceDetails