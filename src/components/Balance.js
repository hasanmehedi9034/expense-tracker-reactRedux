import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { totalBalance } from "../utils/totalBalance";

export default function Balance() {
  const { transactions } = useSelector((state) => state.transactions);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(totalBalance(transactions));
  }, [transactions]);

  return (
    <div className="top_card">
      <p>Your Current Balance</p>
      <h3>
        <span>৳</span>
        <span>{balance}</span>
      </h3>
    </div>
  );
}
