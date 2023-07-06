import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props)=>{
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     title:'',
    //     amount:'',
    //     date:'',
    // })

    const titleHandler=(e)=>{
        setTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     title:e.target.value,
        // })
    };
    const amountHandler=(e)=>{
        setAmount(e.target.value);
        // setUserInput({...userInput, amount:e.target.value})
    };
    const dateHandler=(e)=>{
        setDate(e.target.value);
        // setUserInput({...userInput, date:e.target.value})
    };
    const submitHandler = (e) =>{
        e.preventDefault();

        const expenseData={
            title: title,
            amount: amount,
            date: new Date(date),
        };

        // console.log(expenseData);
        props.onSaveExpense(expenseData);

        setAmount('');
        setDate('');
        setTitle('');
    };
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min='0.01' step='0.01' onChange={amountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min='2003-09-04' max='2029-12-30'onChange={dateHandler} />
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    );
}
export default ExpenseForm;