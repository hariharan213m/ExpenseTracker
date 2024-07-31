import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const History = ({ texts }) => {
  const { handleDelete } = useContext(DataContext);
  const sign = texts.amount < 0 ? "-" : "+";

  return (
    <>
      <li className={texts.amount < 0 ? "minus" : "plus"}>
        {texts.texts}
        <span>
          {sign}${Math.abs(texts.amount)}
        </span>
        <button className="delete-btn" onClick={() => handleDelete(texts.id)}>
          x
        </button>
      </li>
    </>
  );
};

export default History;
