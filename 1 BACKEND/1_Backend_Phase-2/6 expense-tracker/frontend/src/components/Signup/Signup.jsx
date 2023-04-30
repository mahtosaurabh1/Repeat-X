import React, {  useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import './signup.css'
function Signup() {
    const [isLoading,setIsLoading]=useState(false);
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confPassword,setconfPassword]=useState();
    let authCtx=useContext(AuthContext);
    let navigate=useNavigate();

    const signupHandler=(e)=>{
        e.preventDefault();
        setIsLoading(true)
       
       }

  return (
    <div className="parent-sing-up-container">
    <div className="singup">
        <h1>Create-One</h1>
        <div className="email">
            <div>Email</div>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="password">
            <div>Password</div>
            <input type="text" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <div className="confirm-password">
            <div>Confirm-Password</div>
            <input type="text" value={confPassword} onChange={e=>setconfPassword(e.target.value)} />
        </div>
        {isLoading && <p>loading...</p>}
        {!isLoading && <button onClick={signupHandler}>Sing-Up</button>}

    </div>
    
 </div>
  )
}

export default Signup