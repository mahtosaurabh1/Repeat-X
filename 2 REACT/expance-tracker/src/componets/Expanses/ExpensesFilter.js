import React from 'react'
import './expensesfilter.css'
function ExpensesFilter(props) {
    const dropDownHandler=(e)=>{
        props.onChangeFilter(e.target.value)
    }
  return (
    <div className="expenses-filter">
        <div className='expenses-filter__control'>
            <label htmlFor="">Filter By Year</label>
            <select value={props.selected} onChange={dropDownHandler} id="">
                <option value="2021">2021</option>
                <option value="2022">2002</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    </div>
  )
}

export default ExpensesFilter