import React, {  useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import axios from 'axios'
import './signup.css'
function Signup() {
    const [isLoading,setIsLoading]=useState(false);
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [name,setName]=useState();
    const [phoneNo,setPhNo]=useState();
    let authCtx=useContext(AuthContext);
    let navigate=useNavigate();

    const signupHandler=async (e)=>{
        e.preventDefault();
        setIsLoading(true);

        if(password && email){
          let obj={name,email,password,phoneNo};
          let result=await axios.post('http://localhost:5000/register',obj);
          if(result.statusText === 'OK'){
            setIsLoading(false);
            localStorage.setItem('user',email);
            authCtx.login(email);
          }
       }
      }

  return (
    <div className="parent-sing-up-container">
    <div className="singup">
        <h1>Create-One</h1>
        <div className="confirm-password">
            <div>Name</div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} />
        </div>
        <div className="email">
            <div>Email</div>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="confirm-password">
            <div>Phone No.</div>
            <input type="text" value={phoneNo} onChange={e=>setPhNo(e.target.value)} />
        </div>
        <div className="password">
            <div>Password</div>
            <input type="text" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
      
        {isLoading && <p>loading...</p>}
        {!isLoading && <button onClick={signupHandler}>Sing-Up</button>}

    </div>
    
 </div>
  )
}

export default Signup