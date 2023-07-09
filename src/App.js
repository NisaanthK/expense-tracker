import React, { useState } from 'react';
import BigNumber from 'bignumber.js';
import './App.css';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [markup, setMarkup] = useState('');

  const addExpense = () => {
    const expense = {
      id: Date.now(),
      name,
      price: new BigNumber(price),
      markup: new BigNumber(markup),
    };

    setExpenses([...expenses, expense]);
    setName('');
    setPrice('');
    setMarkup('');
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  const calculateTotal = () => {
    let total = new BigNumber(0);

    expenses.forEach((expense) => {
      const markupAmount = expense.price.times(expense.markup).div(100);
      const totalAmount = expense.price.plus(markupAmount);
      total = total.plus(totalAmount);
    });

    return total;
  };

  return (
    <div className="container">
      <h2 className="heading">Budget Tracking</h2>
      <button className="add-button" onClick={addExpense}>
          Add
        </button>
        <br/>

      <div className="input-container">
        <input
          type="text"
          placeholder="Actors"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          className="input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Percentage"
          className="input"
          value={markup}
          onChange={(e) => setMarkup(e.target.value)}
        />
      
      </div>
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id} className="expense-item">
            <span className="expense-name">{expense.name}: </span>
            <span className="expense-price">&euro;{expense.price.toString()} + </span>
            <span className="expense-markup">{expense.markup.toString()}% = </span>
            <span className="expense-markup-amount">&euro;{expense.price.times(expense.markup).div(100).toString()} </span>
            <span className="expense-total">Total: &euro;{expense.price.plus(expense.price.times(expense.markup).div(100)).toString()}</span>
            <button className="delete-button" onClick={() => deleteExpense(expense.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <p className="total-price">Total Price: &euro;{calculateTotal().toString()}</p>
    </div>
  );
}

export default ExpenseTracker;
