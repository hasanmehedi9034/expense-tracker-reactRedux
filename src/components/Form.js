import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDeactive } from "../features/edit/editSlice";
import {
  changeTransaction,
  createTransaction,
} from "../features/transactions/transactionsThunk";

export default function Form() {
  const dispatch = useDispatch();
  const [isEditMode, setIsEditMode] = useState(false);
  const edit = useSelector((state) => state.edit);

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");

  const resetForm = () => {
    setName("");
    setType("");
    setAmount("");
  };

  const handleCreateTransaction = (e) => {
    e.preventDefault();
    dispatch(
      createTransaction({
        name,
        amount: parseInt(amount),
        type,
      })
    );
    resetForm();
  };

  const handleUpdateTransaction = (e) => {
    e.preventDefault();
    dispatch(
      changeTransaction({
        id: edit.id,
        data: {
          name,
          amount: parseInt(amount),
          type,
        },
      })
    );
    setIsEditMode(false);
    resetForm();
    dispatch(editDeactive());
  };

  const handleCancelEdit = (e) => {
    e.preventDefault();
    setIsEditMode(false);
    resetForm();
    dispatch(editDeactive());
  };

  useEffect(() => {
    if (edit.name != "") {
      setIsEditMode(true);
      setName(edit.name);
      setType(edit.type);
      setAmount(edit.amount);
    }
  }, [edit]);

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
              checked={edit.type === "income"}
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
              checked={edit.type === "expense"}
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

        <button
          onClick={
            isEditMode ? handleUpdateTransaction : handleCreateTransaction
          }
          type="submit"
          className="btn"
        >
          {isEditMode ? "Update Transaction" : "Add Transaction"}
        </button>
        {isEditMode && (
          <button onClick={handleCancelEdit} className="btn cancel_edit">
            Cancel Edit
          </button>
        )}
      </form>
    </div>
  );
}
