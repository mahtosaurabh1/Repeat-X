import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../store/authcontext";
import { CartState } from "../../store/cartcontext";
import "./header.css";

function Header() {
  let { cart } = CartState();
  let navigate=useNavigate();
  let authCtx=useContext(AuthContext);
  let isLogin=authCtx.isLoggedIn;

  let logOutHandler=()=>{
    authCtx.logout();
    navigate('/login')
  }
  return (
    <div className="header-container">
      <div className="menu">
        <div className="shop">
        <NavLink to="/" className="Link">
          <div>Home</div>
        </NavLink>
        <NavLink to="/product" className="Link">
          <div>Store</div>
        </NavLink>
        <NavLink to="/about" className="Link">
          <div>About</div>
        </NavLink>
        <NavLink to="/contactus" className="Link">
          <div>Contact-Us</div>
        </NavLink>
        </div>
        <div className="btn">
          <NavLink to="/cart">
            <button>Cart {cart.length}</button>
          </NavLink>
        </div>
        <div className="auth">
            {!isLogin && <><NavLink to='/login' className="Link"><div>Login</div></NavLink>
            <NavLink to='/signup' className="Link"><div>Create Acount</div></NavLink></>}
            {isLogin && <div className="Link" onClick={logOutHandler}>Logout</div>}
        </div>
      </div>
    </div>
  );
}

export default Header;
