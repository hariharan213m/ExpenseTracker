import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const AddTransaction = () => {
  const { transactions, setTransactions, amount, setAmount, handleSubmit } =
    useContext(DataContext);
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            id="text"
            type="text"
            required
            placeholder="Enter text..."
            value={transactions}
            onChange={(e) => setTransactions(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative-expense,positive-income)
          </label>
          <input
            id="amount"
            required
            placeholder="Enter amount..."
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
