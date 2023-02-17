import React from 'react'
import ExpanseForm from './ExpanseForm'
import './newexpanse.css'
function NewEpanses(props) {
  const saveExpanseDataHandler =(entredExpanseData)=>{
    const expanseData={
      ...entredExpanseData,
      id:Math.random().toString() 
    }
    props.onAddExpanses(expanseData);
    // console.log(expanseData);
  }
  return (
    <div className='new-expense'>
        <ExpanseForm onSaveExpanseData={saveExpanseDataHandler}/>
    </div>
  )
}

export default NewEpanses