import React, { useContext } from "react";
import DataContext from "../ExpenseTracker/context/DataContext";

const IncomeExpence = () => {
  const { text } = useContext(DataContext);
  const amounts = text.map((texts) => texts.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    (-1).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>INCOME</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>EXPENSE</h4>
        <p className="money minus">-${expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpence;
