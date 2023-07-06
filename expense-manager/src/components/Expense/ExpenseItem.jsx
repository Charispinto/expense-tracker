import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, {useState} from 'react';

const  ExpenseItem = (props)=>{
    // const [title, setTitle] = useState(props.title);
    
    // const clickHandler= ()=>{
    //     setTitle('UPdated')
    // }
    return (
        <li>
        <Card className='expense-item'>
            
            <ExpenseDate date = {props.date}/>
            {console.log("In Expense Items.jsx")}
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <button onClick = {clickHandler}>Title</button> */}
        </Card>
        </li>
    );

}
export default ExpenseItem;