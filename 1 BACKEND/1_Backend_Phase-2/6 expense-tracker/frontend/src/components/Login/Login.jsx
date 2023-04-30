import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import "./login.css";
function Login() {
  let authCtx = useContext(AuthContext);
  const [loading, setIsLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

   
  };

  return (
    <div className="parent-login-container">
    <div className="login">
      <h1>Login</h1>
      <div className="email">
        <div>Email</div>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="password">
        <div>Password</div>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <div className="actions">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button onClick={loginHandler}>Login</button>
      )}

      <button><Link className="Link" to="/forget-password">Forget Password</Link></button>
      </div>
    </div>
    </div>
  );
}

export default Login;
