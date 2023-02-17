import React, { useState } from 'react'
import './ExapnseForm.css'
function ExpanseForm() {
    const [enteredTitle,setTitle]=useState();
    const [entredAmount,setAmount]=useState();
    const [entredDate,setDate]=useState();

    // const [userInput,setUserInput]=useState({
    //    title:'',
    //    amount:'',
    //    date:'' 
    // })

    let handleTitleInput = (e)=>{
        // setUserInput({
        //     ...userInput,
        //     title:e.target.value
        // })

        // setUserInput((prevValue)=>{
        //     return {
        //         ...prevValue,title:e.target.value
        //     }
        // })

        setTitle(e.target.value);

        
    }

    let handleAmountInput=(e)=>{
        // setUserInput({
        //     ...userInput,
        //     amount:e.target.value
        // })

        setAmount(e.target.value);
    }

    let handleDateInput=(e)=>{
        // setUserInput({
        //     ...userInput,
        //     date:e.target.value
        // })
        setDate(e.target.value);
    }

    const formSubmitHandler=(e)=>{
        e.preventDefault();
        const expanseData={
            title:enteredTitle,
            amount:entredAmount,
            date:new Date(entredDate)
        }
        console.warn(expanseData)
    }
  return (
    <form action="" onSubmit={formSubmitHandler}>
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