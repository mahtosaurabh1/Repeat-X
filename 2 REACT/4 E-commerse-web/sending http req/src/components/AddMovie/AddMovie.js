import React, { useState } from 'react';

import classes from './AddMovie.module.css';

function AddMovie(props) {
  let [title,setTitle]=useState();
  let [openingText,setopeningText]=useState();
  let [RelDate,setRelDate]=useState();
 
 let submitHandler=(e)=>{
  e.preventDefault();
  let obj={
    title,
    openingText,
    RelDate
   }
  
   props.onAddMovie(obj);
  // console.log(title,openingText,RelDate);

 }


  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' onChange={(e)=>setTitle(e.target.value)} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' onChange={(e)=>setopeningText(e.target.value)}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Release Date</label>
        <input type='text' id='date' onChange={(e)=>setRelDate(e.target.value)}  />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
