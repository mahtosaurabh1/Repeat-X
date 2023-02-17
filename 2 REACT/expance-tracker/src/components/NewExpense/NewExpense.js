import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing,setIsEditing]=useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    setIsEditing(false)
    props.onAddExpense(expenseData);
  }

  const startEditingHandler=()=>{
    setIsEditing(true)
  }

  const endEditingHandler=()=>{
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
     {!isEditing &&  <button onClick={startEditingHandler}>Add New Expenses</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onCancel={endEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
