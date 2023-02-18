import React, { useEffect, useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom';

function Login() {
    const [entredEmail,setEntredEmail]=useState('');
    const [entredPassword,setentredPassword]=useState('')
    const [entredSclName,setentredSclName]=useState('');
    let navigate=useNavigate();
    function handleEmail(e){
        setEntredEmail(e.target.value);
    }

    function handlePassword(e){
        setentredPassword(e.target.value)
    }

    function handleSchoolName(e){
        setentredSclName(e.target.value)
    }

    useEffect(()=>{
        let auth = localStorage.getItem("isLogedIn");
        if (auth) {
          navigate("/");
        }
      },[])
    function handleLogin(){
        localStorage.setItem('isLogedIn','1');
        navigate('/')
    }
  return (
    <div>
        <div className="email-cont">
            <div>Email</div>
            <input type="text" value={entredEmail} onChange={handleEmail} />
        </div>
        <div className="password-cont">
            <div>Password</div>
            <input type="text" value={entredPassword} onChange={handlePassword} />
        </div>
        <div className="school-cont">
            <div>School Name</div>
            <input type="text" value={entredSclName} onChange={handleSchoolName} />
        </div>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login