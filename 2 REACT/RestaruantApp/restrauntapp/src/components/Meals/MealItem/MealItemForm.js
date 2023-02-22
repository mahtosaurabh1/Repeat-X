import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
function MealItemForm() {
  return (
    <form action="" className={classes.form}>
        <Input label="Amount" input={{
            id:'amount',
            type:'number',
            defaultValue:'1'
        }} />
        <button>+ Add</button>
    </form>
  )
}

export default MealItemForm