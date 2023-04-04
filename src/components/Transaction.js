import React from "react";
import { useDispatch } from "react-redux";
import deleteLogo from "../assets/images/delete.svg";
import editLogo from "../assets/images/edit.svg";
import { removeTransaction } from "../features/transactions/transactionsThunk";

export default function Transaction({ transaction }) {
  const dispatch = useDispatch();
  const { id, name, type, amount } = transaction;

  const handleDeleteTransaction = () => {
    dispatch(removeTransaction(id));
  };

  return (
    <li className={`transaction ${type === "income" ? " income" : " expense"}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link">
          <img className="icon" src={editLogo} />
        </button>
        <button onClick={handleDeleteTransaction} className="link">
          <img className="icon" src={deleteLogo} />
        </button>
      </div>
    </li>
  );
}
