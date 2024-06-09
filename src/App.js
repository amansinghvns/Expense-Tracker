import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className="container">
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
