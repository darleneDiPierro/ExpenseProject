import ExpenseAssignment from "./components/Expenses/ExpenseAssignment";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Niacinamide Serum",
      amount: 20,
      date: new Date(2021, 9, 9),
    },
    {
      id: "e2",
      title: "Aloe Vera Moisturizer",
      amount: 294.67,
      date: new Date(2021, 10, 10),
    },
    {
      id: " e3",
      title: "Neem mask",
      amount: 100,
      date: new Date(2021, 9, 2),
    },
    { 
      id: "e4", 
      title: "Flannel", 
      amount: 200, 
      date: new Date(2021, 10, 9) }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseAssignment items={expenses}/>
    </div>
  );
}

export default App;
