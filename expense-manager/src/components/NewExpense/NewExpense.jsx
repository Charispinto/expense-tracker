import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props)=>{
  const saveExpenseHandler=(enteredExpense)=>{
    const expenses={
      ...enteredExpense,
      id: Math.random().toString()
    }
    console.log(expenses);
    props.onAddExp(expenses);
  };
    return (
        <div className='new-expense'>
          <ExpenseForm  onSaveExpense={saveExpenseHandler}/>
        </div>
    );
}
export default NewExpense;