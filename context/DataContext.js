import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [text, setText] = useState([]);

  const [transactions, setTransactions] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    JSON.parse(localStorage.getItem("transaction_list"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = text.length ? text[text.length - 1].id + 1 : 1;
    const addNewText = {
      id,
      texts: transactions,
      amount: parseFloat(amount),
    };
    const listText = [...text, addNewText];
    setText(listText);

    setTransactions("");
    setAmount("");

    localStorage.setItem("transaction_list", JSON.stringify(listText));
  };

  const handleDelete = (id) => {
    const listItems = text.filter((texts) => texts.id !== id);
    setText(listItems);
    localStorage.setItem("transaction_list", JSON.stringify(listItems));
  };
  return (
    <DataContext.Provider
      value={{
        text,
        handleDelete,
        transactions,
        setTransactions,
        amount,
        setAmount,
        handleSubmit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataContext;
