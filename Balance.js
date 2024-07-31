import React, { useContext } from "react";
import DataContext from "../ExpenseTracker/context/DataContext";

const Balance = () => {
  const { text } = useContext(DataContext);
  const amounts = text.map((texts) => texts.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>YOUR BALANCE</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
