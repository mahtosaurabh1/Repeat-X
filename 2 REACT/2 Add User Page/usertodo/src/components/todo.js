import React, { useState } from 'react'

function Todo() {
    const [arr,setArr]=useState([]);
    const [entredName,setEntredName]=useState('abc')
    const [entredAge,setEntredAge]=useState('25');
    const [entredCollageName,setEntredCollageName]=useState('UIT')

    const nameHandler=(e)=>{
        setEntredName(e.target.value)
    }

    const ageHandler=(e)=>{
        setEntredAge(e.target.value);
    }
 
    const collageNameHandler =(e)=>{
        setEntredCollageName(e.target.value);
    }
    const addUser=()=>{
        if(entredAge.trim().length == 0 || entredName.trim().length === 0){
            alert('please entred valid name and age');
            return;
        }
        let obj={
            name:entredName,
            age:entredAge,
            collagename:entredCollageName
        }
        setArr([obj,...arr]);

    }
    console.log(arr);


  return (
    <div className="container">
        <div className='input-cont'>
      <div className="name-cont">
      <label htmlFor="">Name</label>
        <input type="text" value={entredName} onChange={nameHandler}/>
      </div>
      <div className="age-cont">
      <label htmlFor="">Age</label>
        <input type="number"  value={entredAge} onChange={ageHandler}/>
      </div>
      <div className="collageName-cont">
      <label htmlFor="">CollageName</label>
        <input type="text" value={entredCollageName} onChange={collageNameHandler}/>
      </div>
        <button className="btn" onClick={addUser}>Add User</button>
    </div>

    <div className="showonpage">
        {
            arr.map((val,idx)=>{
                return (
                    <div key={idx}>
                        <div>{val.name} ( {val.age} year Old )  CollageName - {val.collagename}</div>
                   </div>
                )
            })
        }

       
    </div>
    </div>
  )
}

export default Todo