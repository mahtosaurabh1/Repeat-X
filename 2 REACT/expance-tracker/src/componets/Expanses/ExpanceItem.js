import React, { useState } from "react";
import Card from "../UI/Card";
import ExpanceDate from "./ExpanceDate";
import ExpanceDetails from "./ExpanceDetails";
import "./expanceitem.css";
import ExpensesFilter from "./ExpensesFilter";
let ExpanceItem = ({ props }) => {
  let [arr, setArr] = useState(props);
  let [filtredYear,setFilteredYear]=useState('2020');
   const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
   }


  return (
    <div >
    <ExpensesFilter selected={filtredYear} onChangeFilter={filterChangeHandler} />
      {arr.map((val) => {
        return (
          <div className="expense-item" key={val.id}>
            <Card />
            <ExpanceDate props={val} />
            <ExpanceDetails props={val} />
           </div>
        );
      })}
    </div>
  );
};

export default ExpanceItem;
