import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css'
function Login() {
    const [loading,setIsLoading]=useState(false);
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    let navigate=useNavigate();

    const loginHandler=(e)=>{
        e.preventDefault();
        setIsLoading(true)
       
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_NFcrOTB_b8H_39a6sCEPzWU17CKQy_w',{
          method:'POST',
          body:JSON.stringify({
           email,password,
           returnSecureToken:true
          }),
          headers:{
           'Content-Type':'application/json'
          }
         }).then(res=>{
           setIsLoading(false)
           if(res.ok){
               localStorage.setItem('user',email)
               return res.json();
           }else{
           return res.json().then(data=>{
             // console.log(data);
             let errorMessage='Authencation failed...'
             if(data && data.error && data.error.message){
              errorMessage=data.error.message;
             }
             throw new Error(errorMessage)
            }) 
           }
         }).then((data)=>{
          // console.log(data);
          navigate('/')
          
         }).catch((err)=>{
          alert(err.message)
         })
       }

  return (
    <div className="login-container">
        <div className="email">
            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="password">
            <label htmlFor="">Password</label>
            <input type="text" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        {loading ?<p>Loading...</p>:<button onClick={loginHandler}>Login</button>}
        <button>Forget Password</button>
        <div>
          <p>Dont have account create one <button>Singup</button></p>
        </div>
    </div>
  )
}

export default Login