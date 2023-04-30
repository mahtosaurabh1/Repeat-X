import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../store/auth-context';
import './profile.css'
function Profile() {
    const authCtx=useContext(AuthContext);
    const [name,setName]=useState('');
    const [loadUserProfile,setloadUserProfile]=useState([]);
    const [currUser,setcurrUser]=useState();
   
    let user=localStorage.getItem('user');

    let fetchDataFromServer= async ()=>{
          
   }


   const updateuserProfile=(val)=>{
  

   }

   useEffect(()=>{
    fetchDataFromServer();
   },[])

    const handleProfileName=async ()=>{
      
    }


    // handle verify
    let verifyEmail=async ()=>{
      
    }
  return (
    <div className='parent-profile-container'>
    <div className="profile">
        <h1>Profile</h1>
        <div className="name">
            <div>Name</div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            {authCtx.user && <label>Full Name - {authCtx.user.name} </label>}
        </div>
        {currUser && <button onClick={()=>updateuserProfile(currUser)}>Update</button>}
        {!currUser && <button onClick={handleProfileName}>Add Name</button>}
        {!authCtx.verify  && <button onClick={verifyEmail}>Verify Email</button>}
    </div>
    </div>
  )
}

export default Profile