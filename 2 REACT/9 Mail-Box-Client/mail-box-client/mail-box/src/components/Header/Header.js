import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <header className={classes.sticky}>
      <nav className={classes.navbar}>
        <h1 className={classes.navbar__title}>MailBox</h1>
        <ul className={classes.navbar__list}>
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
        </ul>
      </nav>
    </header>
  );
};
