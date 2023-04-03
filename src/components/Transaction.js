import React from "react";
import deleteLogo from "../assets/images/delete.svg";
import editLogo from "../assets/images/edit.svg";

export default function Transaction({ transaction }) {
  const { id, name, type, amount } = transaction;
  return (
    <li className={`transaction ${type === "income" ? " income" : " expense"}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link">
          <img className="icon" src={editLogo} />
        </button>
        <button className="link">
          <img className="icon" src={deleteLogo} />
        </button>
      </div>
    </li>
  );
}
