import React, { useState } from "react";

import "./ExpenseForm.css";

const getCurrentDate = () => {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) {
    day = `0${day}`;
  }

  if (month < 10) {
    month = `0${month}`;
  }

  return `${year}-${month}-${day}`;
};

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0.0);
  const [enteredDate, setEnteredDate] = useState(getCurrentDate);

  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    // setUserInput(previousState => {
    //     return { ...previousState, enteredTitle: event.target.value};
    // });

    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });

    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setUserInput(previousState => {
    //     return { ...previousState, enteredAmount: event.target.value};
    // });

    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // });

    setEnteredAmount(event.target.value);
  };

  const dateChangeHander = (event) => {
    // setUserInput(previousState => {
    //     return { ...previousState, enteredDate: event.target.value};
    // });

    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // });

    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount(0.0);
    setEnteredDate(getCurrentDate);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHander}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
