import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTransaction } from "../features/transactions/transactionsThunk";

export default function Form() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const handleCreateTransaction = (e) => {
    e.preventDefault();
    dispatch(
      createTransaction({
        name,
        amount: parseInt(amount),
        type,
      })
    );
  };

  return (
    <div className="form">
      <form onSubmit={handleCreateTransaction}>
        <h3>Add new transaction</h3>

        <div className="form-group">
          <label for="transaction_name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="transaction_name"
            placeholder="My Salary"
          />
        </div>

        <div className="form-group radio">
          <label for="transaction_type">Type</label>
          <div className="radio_group">
            <input
              value="income"
              onChange={(e) => setType(e.target.value)}
              type="radio"
              name="transaction_type"
            />
            <label for="transaction_type">Income</label>
          </div>
          <div className="radio_group">
            <input
              onChange={(e) => setType(e.target.value)}
              type="radio"
              value="expense"
              name="transaction_type"
              placeholder="Expense"
            />
            <label for="transaction_type">Expense</label>
          </div>
        </div>

        <div className="form-group">
          <label for="transaction_amount">Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="300"
            name="transaction_amount"
          />
        </div>

        <button type="submit" className="btn">
          Add Transaction
        </button>
        <button className="btn cancel_edit">Cancel Edit</button>
      </form>
    </div>
  );
}
