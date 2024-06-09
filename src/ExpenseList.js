import React from 'react';
import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <span>{expense.description}</span>
              <span>₹{expense.amount}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
