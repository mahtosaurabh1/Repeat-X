import React, { useState } from 'react'
import './ForgetPassword.css'
function ForgetPassword() {
    const [email,setEmail]=useState();
    let handleForgetPassword=async ()=>{
      
    }
  return (
    <div className='parent-forget-container'>
    <div className="forget">
         <h4>Enter the email which you registred</h4>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <button onClick={handleForgetPassword}>Send Link</button>
    </div>
    </div>
  )
}

export default ForgetPassword