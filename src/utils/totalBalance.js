export const totalBalance = (transactions) => {
  return transactions.reduce((total, current) => total + current.amount, 0);
};
