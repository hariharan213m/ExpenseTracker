import Header from "./Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpence";
import TransactionList from "./TransactionList";
import AddTransaction from "../src/AddTransaction";

import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <main>
      <DataProvider>
        <Header title="Expense Tracker" />
        <div className="container">
          <Balance />
          <IncomeExpense />
          <TransactionList />
        </div>
        <AddTransaction />
      </DataProvider>
    </main>
  );
}

export default App;
