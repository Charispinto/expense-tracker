import React,{ useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses=(props)=>{

    const [filterYear, setFilterYear] = useState('2020');
    const filterChangeHandler = (selYear)=>{
        setFilterYear(selYear);
    };
    const filteredExp = props.items.filter((expense) => {
              return expense.date.getFullYear().toString() === filterYear;
    });

    

    return (
      <div>
        <Card className="expenses">
            <ExpensesFilter selected = {filterYear} onChangeFilter = {filterChangeHandler} />
            <ExpensesChart expense={filteredExp}/>
            <ExpensesList items={filteredExp} />            
        </Card>
      </div>
    );
};

export default Expenses;