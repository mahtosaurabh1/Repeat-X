import React, { useEffect, useState } from 'react'
import './profile.css'
function Profile() {
    const [name,setName]=useState();
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
         setcurrUser(curentUser);
         updateuserProfile(curentUser)
         

   }


   const updateuserProfile=(val)=>{
    console.log(val[0].id);
    fetch(`https://expense-tracker-217da-default-rtdb.firebaseio.com/user-profile/${val[0].id}.json`,{
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
    //    alert('updated')
       }).catch((err)=>{
        alert(err.message);
        return;
       })

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
            <input type="text" value={currUser ? currUser[0].name:name} onChange={(e)=>setName(e.target.value)}/>
            {/* <label htmlFor="">Full Name {name}</label> */}
        </div>
        {currUser && <button onClick={()=>updateuserProfile(currUser)}>Update</button>}
        {!currUser && <button onClick={handleProfileName}>Add Name</button>}
    </div>
  )
}

export default Profile