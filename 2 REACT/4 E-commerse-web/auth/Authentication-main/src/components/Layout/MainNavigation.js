import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../store/authcontext";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  let authCtx = useContext(AuthContext);
  let history=useHistory();
  let isLoggedin = authCtx.isLoggedIn;

  let logoutHandler=()=>{
    authCtx.logout();
    history.replace('/auth')
  }

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedin && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedin && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
