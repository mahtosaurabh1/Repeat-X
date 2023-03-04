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
        let res= await fetch('https://expense-tracker-217da-default-rtdb.firebaseio.com/user-profile.json');
         let data= await res.json();
         let loadItem=[];
         for(let key in data){
           loadItem.push({
               id:key,
               name:data[key].name,
               user:data[key].user
             });
         }
         setloadUserProfile(loadItem);

         //check current user

         let curentUser=loadItem.filter((val)=>{
            return val.user == user ;
         })
         setcurrUser(curentUser[0]);
         authCtx.setUser(curentUser[0]);
        //  updateuserProfile(curentUser)    
   }


   const updateuserProfile=(val)=>{
   if(name.trim().length > 0){
    fetch(`https://expense-tracker-217da-default-rtdb.firebaseio.com/user-profile/${val.id}.json`,{
        method:'PUT',
        body:JSON.stringify({
            name:name,
            user,
            returnSecureToken:true
        }),
        headers:{
         'Content-Type':'application/json'
        }
       }).then(res=>{
    console.log("DScf",val.name);
    authCtx.setUser({name:name,user:user});
       }).catch((err)=>{
        alert(err.message);
        return;
       })
   }

   }

   useEffect(()=>{
    fetchDataFromServer();
   },[])

    const handleProfileName=async ()=>{
        fetch('https://expense-tracker-217da-default-rtdb.firebaseio.com/user-profile.json',{
            method:'POST',
            body:JSON.stringify({
                name:name,
                user:user,
                returnSecureToken:true
            }),
            headers:{
             'Content-Type':'application/json'
            }
           }).then(res=>{
            fetchDataFromServer();
           }).catch((err)=>{
            alert(err.message);
            return;
           })
    alert('name saved to db')
    }
  return (
    <div className="profile-container">
        <h1>Profile</h1>
        <div className="name">
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            {authCtx.user && <label>Full Name {authCtx.user.name} </label>}
        </div>
        {currUser && <button onClick={()=>updateuserProfile(currUser)}>Update</button>}
        {!currUser && <button onClick={handleProfileName}>Add Name</button>}
    </div>
  )
}

export default Profile