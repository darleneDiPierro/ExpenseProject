import React, { useState } from 'react';
import ExpenseAssignment from "./components/Expenses/ExpenseAssignment";
import NewExpense from  "./components/NewExpenses/NewExpense"

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Cumi Asin",
    amount: 1.38,
    date: new Date(2021, 9, 9),
  },
  {
    id: "e2",
    title: "Fresh Care",
    amount: 0.966,
    date: new Date(2021, 10, 10),
  },
  {
    id: " e3",
    title: "Converse Green",
    amount: 48.3,
    date: new Date(2021, 9, 2),
  },
  {
    id: "e4",
    title: "Flannel Green",
    amount: 10.35,
    date: new Date(2021, 10, 9) }
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    setExpenses(prevState => {
      return [expense, ...prevState];
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseAssignment items={expenses}/>
    </div>
  );
}

export default App;
