import React, { useState } from 'react';
import Card from "../UI/Card";
import './ExpenseAssignment.css';
import ExpensesFilter from "../NewExpenses/ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function ExpenseAssignment(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter(expenses => {
    return expenses.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div>
    <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    <ExpensesChart expenses={filteredExpenses}/>
    <ExpensesList items={filteredExpenses} />
    </Card>
    </div>
  );
}

export default ExpenseAssignment;
