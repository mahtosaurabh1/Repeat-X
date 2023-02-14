import React from 'react'

function ExpanceDetails(props) {
  return (
    <>
            <div className='expense-item__description'>
                   <h2>{props.props.title}</h2>
                   <h2>{props.props.location}</h2>
                   <div className='expense-item__price'>{props.props.price}</div>
                </div>
    </>
  )
}

export default ExpanceDetails