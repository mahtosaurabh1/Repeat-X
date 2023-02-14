import React from 'react'
import ExpanceDate from './ExpanceDate';
import ExpanceDetails from './ExpanceDetails';
import './expanceitem.css'
function ExpanceItem({props}) {
  return (
    <>
    {
        props.map((val)=>{
            return (
                <div className='expense-item' key={val.id}>
                {/* <h1>{val.date.toISOString()}</h1> */}
                <ExpanceDate props={val}/>
                {/* <div className='expense-item__description'>
                   <h2>{val.title}</h2>
                   <h2>{val.location}</h2>
                   <div className='expense-item__price'>{val.price}</div>
                </div> */}
                <ExpanceDetails props={val}/>
                </div>
            )
        })
    }
    </>
    )
}

export default ExpanceItem