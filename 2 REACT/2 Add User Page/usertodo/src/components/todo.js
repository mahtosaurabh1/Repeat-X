import React, { useState } from 'react'

function Todo() {
    const [arr,setArr]=useState([{name:"aman",age:'25'}]);
    const [entredName,setEntredName]=useState('abc')
    const [entredAge,setEntredAge]=useState('25');

    const nameHandler=(e)=>{
        setEntredName(e.target.value)
    }

    const ageHandler=(e)=>{
        setEntredAge(e.target.value);
    }

    const addUser=()=>{
        if(entredAge.trim().length == 0 || entredName.trim().length === 0){
            alert('please entred valid name and age');
            return;
        }
        let obj={
            name:entredName,
            age:entredAge
        }
        setArr([obj,...arr]);

    }


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
        <button className="btn" onClick={addUser}>Add User</button>
    </div>

    <div className="showonpage">
        {
            arr.map((val,idx)=>{
                return (
                    <div key={idx}>
                        <div>{val.name} ( {val.age} year Old )</div>
                   </div>
                )
            })
        }

       
    </div>
    </div>
  )
}

export default Todo