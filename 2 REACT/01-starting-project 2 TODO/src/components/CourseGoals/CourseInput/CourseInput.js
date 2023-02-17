import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid]=useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);

    if(event.target.value.trim().length > 0){
      let frmctrl=document.querySelector('.form')
      let a=frmctrl.querySelector('.button');
      a.classList.remove('btn')
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  function handleaddGoalBtn(){
    if(enteredValue.trim().length === 0){
      let frmctrl=document.querySelector('.form')
     let a=frmctrl.querySelector('.button');
     a.classList.add('btn')
    }
  }

  return (
    <form className='form' onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color:isValid?'black':'red'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit"  className='button' onClick={handleaddGoalBtn}>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
