import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import "./login.css";
import axios from "axios";
function Login() {
  let authCtx = useContext(AuthContext);
  const [loading, setIsLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let navigate = useNavigate();

  const loginHandler = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    let result=await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-type':'application/json'
              },
        })
        result=await result.json();
        if(result.name){
            localStorage.setItem('user',email);
            navigate('/')
        }else{
            alert('email does not exist')
        }
        console.log(result);
   
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

      </div>
    </div>
    </div>
  );
}

export default Login;
