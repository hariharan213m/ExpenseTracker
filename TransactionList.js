import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "./context/DataContext";
const TransactionList = () => {
  const { text, handleDelete } = useContext(DataContext);
  return (
    <>
      {text.length ? (
        <Feed text={text} handleDelete={handleDelete} />
      ) : (
        <p style={{ textAlign: "center" }}>No transactions</p>
      )}
    </>
  );
};

export default TransactionList;
