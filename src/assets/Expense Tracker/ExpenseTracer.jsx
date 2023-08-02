import Balance from "./Balance";
import IncomeExpense from "./IncomeExpenses";
import TransactionDetails from "./TransactionDetails";
const ExpenceTracker = () => {
  return (
    <>
      <h1>Expence Tracker</h1>
      <Balance />
      <IncomeExpense />
      <TransactionDetails />
    </>
  );
};
export default ExpenceTracker;
