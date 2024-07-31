import React, { useContext } from "react";
import History from "./History";
import DataContext from "../ExpenseTracker/context/DataContext";

const Feed = () => {
  const { text, handleDelete } = useContext(DataContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {text.map((texts) => (
          <History key={texts.id} texts={texts} handleDelete={handleDelete} />
        ))}
      </ul>
    </>
  );
};

export default Feed;
