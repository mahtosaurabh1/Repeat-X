import React from "react";

function ExpanceDate(props) {
    console.log("date is",props.props.date);
  return (
    <>
      <div className="expense-date">
        <div className="expense-date__month">{props.props.date.getFullYear()}</div>
        <div className="expense-date__year">{props.props.date.getMonth()}</div>
        <div className="expense-date__day">{props.props.date.getDate()}</div>
      </div>
    </>
  );
}

export default ExpanceDate;
