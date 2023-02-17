import { useState } from 'react';
import './App.css';
import ExpanceItem from './componets/Expanses/ExpanceItem';
import NewEpanses from './componets/NewExpanses/newEpanses';

let  App=()=> {
 let [arr,setArr]=useState([]);
  // const expances=[{
  //   id:1,
  //   title:"movie",
  //   location:"Samastipur",
  //   price:200,
  //   date:new Date("2023-03-25")
  // },{
  //   id:2,
  //   title:"play",
  //   location:"delhi",
  //   price:200,
  //   date:new Date("2022-03-25")
  // },{
  //   id:3,
  //   title:"book",
  //   location:"Mumbai",
  //   price:200,
  //   date:new Date("2024-03-25")
  // },]

  const addExpanseHandler=(expanse)=>{
    arr.push(expanse);
    // setArr(...arr,expanse);
    // console.log(arr);
    <ExpanceItem props={arr}/>
  }
  return (
    <div>
    <NewEpanses onAddExpanses={addExpanseHandler} />
    <ExpanceItem props={arr}/>
    </div>
  );
}

export default App;
