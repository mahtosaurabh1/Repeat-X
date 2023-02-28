import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {

 let  handleRemoveMovie=(id)=>{

  }

  return (
    <div>
      <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
    </li>
    <button onClick={()=>handleRemoveMovie(props.id)}>X</button>
    </div>
  );
};

export default Movie;
