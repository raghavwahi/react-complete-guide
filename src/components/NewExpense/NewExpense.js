import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    editingHandler();
  }

  const editingHandler = () => {
    setIsEditing((previousState) => {
      return !previousState;
    });
  }

  let setExpenseForm = <button onClick={editingHandler}>Add New Expense</button>

  if (isEditing) {
    setExpenseForm = <ExpenseForm onCancel={editingHandler} onSaveExpenseData={saveExpenseDataHandler} />
  }

  return (
    <div className="new-expense">
      {setExpenseForm}
    </div>
  );
};

export default NewExpense;
