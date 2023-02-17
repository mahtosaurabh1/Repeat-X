import React from 'react'
import './ExapnseForm.css'
function ExpanseForm() {
    let handleInput = (e)=>{
        console.log(e.target.value);
    }
  return (
    <form action="">
        <div className="new-expense__control">
            <div className='new-expense__control'>
                <label >Title</label>
                <input type="text" onChange={handleInput} />
            </div>
            <div className='new-expense__control'>
                <label >Amount</label>
                <input type="number" onChange={handleInput} />
            </div>
            <div className='new-expense__control'>
                <label >Date</label>
                <input type="date" onChange={handleInput} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expanses</button>
        </div>
    </form>
  )
}

export default ExpanseForm