import React, { Fragment } from 'react'
import classes from './Header.module.css'
import mealImg from '../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
                <h1>React Meal</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImg} alt="A meal Image" />
        </div>
        
    </Fragment>
  )
}

export default Header