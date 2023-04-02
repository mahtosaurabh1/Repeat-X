import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import classes from "./Header.module.css";

export const Header = () => {
  let authCtx=useContext(AuthContext);
  let navigate=useNavigate();
  let user=localStorage.getItem('user')
  let logoutHandler=()=>{
    authCtx.logout();
    navigate('/login');
  }
  return (
    <header className={classes.sticky}>
      <nav className={classes.navbar}>
        <h1 className={classes.navbar__title}>MailBox</h1>
        <ul className={classes.navbar__list}>
          {!user && <>
            <li><NavLink
            to="/login"
            className={classes.navbar__link}
            activeclassname={classes.active}
          >
            Login
          </NavLink></li>
          <li><NavLink
            to="/singup"
            className={classes.navbar__link}
            activeclassname={classes.active}
          >
            Singup
          </NavLink></li>
       
      </>}
      {user &&  <>  
          <li>
          <NavLink
              to="/"
              className={classes.navbar__link}
              activeclassname={classes.active}
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
              to="/inbox"
              className={classes.navbar__link}
              activeclassname={classes.active}
            >
              Inbox
            </NavLink>
          </li>
           <li>
           <NavLink
              to="/sent"
              className={classes.navbar__link}
              activeclassname={classes.active}
            >
              Sent
            </NavLink>
  
           </li>
           <li>
         <NavLink
            className={classes.navbar__link}
            activeclassname={classes.active}
            onClick={logoutHandler}
          >
            Logout
          </NavLink>
         </li></>}
         
        </ul>
      </nav>
    </header>
  );
};
