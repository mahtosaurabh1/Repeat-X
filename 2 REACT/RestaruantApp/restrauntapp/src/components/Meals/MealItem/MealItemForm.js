import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
function MealItemForm(props) {
  const [amountIsVAlid,setamountIsVAlid]=useState(true);

  let amountInputRef=useRef();
  console.log("sdsd",amountInputRef);
  let submitHandler=(e)=>{
    e.preventDefault();
    const entredAmount=amountInputRef.current.value;
    console.log(entredAmount);
    let entredAmountNumber = +entredAmount;
    if(entredAmountNumber.trim().length === 0 ||entredAmountNumber <=0 || entredAmountNumber>5){
      setamountIsVAlid(false)
      return ;
    }
    props.onAddToCart(entredAmountNumber)
  }

  return (
    <form  className={classes.form} onSubmit={submitHandler} >
        <Input label="Amount" input={{
            ref:{amountInputRef},
            id:'amount_' + props.id,
            type:'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue:'1',
        }} />
        <button>+ Add</button>
        {!amountIsVAlid  && <p>Please enter valid amount 1-5</p>}
    </form>
  )
}

export default MealItemForm