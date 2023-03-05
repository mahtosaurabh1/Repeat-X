import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../../store/auth-context';
import './header.css'
function Header() {
  let authCtx=useContext(AuthContext);
  let navigate=useNavigate();
  let logoutHandler=()=>{
    authCtx.logout();
    navigate('/login')
  }
  return (
    <div className="header-container">
      <h3>Welcome to Expanse tracker</h3>
      <p>Your Profile is Incomple <Link to='/profile'><button>Complete Now</button></Link></p>
      <Link to='/login'>Login</Link>
      <Link to='/singup'>Create Account</Link>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Header