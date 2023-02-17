import React, { useState } from 'react'
import './ExapnseForm.css'
function ExpanseForm() {
    const [title,setTitle]=useState();
    const [amount,setAmount]=useState();
    const [date,setDate]=useState();
    let handleTitleInput = (e)=>{
        setTitle(e.target.value);
    }

    let handleAmountInput=(e)=>{
        setAmount(e.target.value);
    }

    let handleDateInput=(e)=>{
        setDate(e.target.value);
    }
  return (
    <form action="">
        <div className="new-expense__control">
            <div className='new-expense__control'>
                <label >Title</label>
                <input type="text" onChange={handleTitleInput} />
            </div>
            <div className='new-expense__control'>
                <label >Amount</label>
                <input type="number" onChange={handleAmountInput} />
            </div>
            <div className='new-expense__control'>
                <label >Date</label>
                <input type="date" onChange={handleDateInput} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expanses</button>
        </div>
    </form>
  )
}

export default ExpanseForm