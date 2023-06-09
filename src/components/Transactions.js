import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../features/transactions/transactionsThunk";
import Transaction from "./Transaction";

export default function Transactions() {
  const dispatch = useDispatch();
  const { isLoading, isError, error, transactions } = useSelector(
    (state) => state.transactions
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  // decide what to render
  let content = null;
  if (isLoading && !isError) content = <div>Loading...</div>;
  if (!isLoading && isError && error) content = <div>{error}</div>;
  if (!isLoading && !isError && transactions.length > 0)
    content = transactions.map((transaction) => (
      <Transaction key={transaction.id} transaction={transaction} />
    ));

  return (
    <>
      <p className="second_heading">Your Transactions:</p>
      <div className="conatiner_of_list_of_transactions">
        <ul>{content}</ul>
      </div>
    </>
  );
}
