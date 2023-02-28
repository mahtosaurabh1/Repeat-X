import React, { useState } from 'react'
import './contact.css'
function Contact() {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [phNo,setPhno]=useState();


    let submitHandler=async ()=>{
        let obj={name,email,phNo};
        const response = await fetch('https://practice-9d840-default-rtdb.firebaseio.com/ecommerse-contact-us.json', {
              method: 'POST',
              body: JSON.stringify(obj),
              headers: {
                'Content-Type': 'application/json'
              }
            });
            alert('Thank you for Contact request , i will contact you soon')
            setEmail('');
            setName('')
            setPhno('')
    }
  return (
    <div className="contact-container">
        <div className="name">
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="email">
            <label htmlFor="">Email id</label>
            <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="phoneno">
            <label htmlFor="">Phone No.</label>
            <input type="number" value={phNo} onChange={(e)=>setPhno(e.target.value)}/>
        </div>
        <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Contact