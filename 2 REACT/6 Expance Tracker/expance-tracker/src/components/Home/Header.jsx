import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import "./header.css";
function Header() {
  let authCtx = useContext(AuthContext);
  let navigate = useNavigate();
  let user = localStorage.getItem("user");
  let logoutHandler = () => {
    authCtx.logout();
    navigate("/login");
  };
  return (
    <div className="header">
      <h3>Welcome to Expanse tracker</h3>
      {user ? (
        <>
          <button><Link  className="Link" to="/expenses">Expenses</Link></button>
          <button onClick={logoutHandler}>Logout</button>{" "}
          <div>
            Your Profile is Incomple{" "}
            <Link to="/profile" className="Link">
              <button>Complete Now</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link className="Link" to="/login"><button>Login</button></Link>
          <Link  className="Link" to="/singup"><button className="Link">Create-One</button></Link>
        </>
      )}
    </div>
  );
}

export default Header;
