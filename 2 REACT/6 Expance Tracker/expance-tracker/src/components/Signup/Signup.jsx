import React, {  useState } from 'react'
import './signup.css'
function Signup() {
    const [isLoading,setIsLoading]=useState(false);
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [confPassword,setconfPassword]=useState();
 

    const signupHandler=(e)=>{
        e.preventDefault();
        setIsLoading(true)
        
        if(password === confPassword){
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_NFcrOTB_b8H_39a6sCEPzWU17CKQy_w',{
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
          
         }).catch((err)=>{
          alert(err.message)
         })
        }else{
            alert('Password mismatched');
            setIsLoading(false)
        }
        
       }

  return (
    <div className="signup-container">
        <h1>Sign-Up</h1>
        <div className="email">
            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="password">
            <label htmlFor="">Password</label>
            <input type="text" value={password} onChange={e=>setPassword(e.target.value)} />
        </div>
        <div className="confirm-password">
            <label htmlFor="">Confirm-Password</label>
            <input type="text" value={confPassword} onChange={e=>setconfPassword(e.target.value)} />
        </div>
        {isLoading && <p>loading...</p>}
        {!isLoading && <button onClick={signupHandler}>Signup</button>}

        <div className="already-have-act">
            <div>Alraedy have a account  Login</div>
        </div>
    </div>
  )
}

export default Signup