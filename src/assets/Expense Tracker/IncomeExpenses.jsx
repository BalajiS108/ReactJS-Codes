const IncomeExpense = () => {
  return (
    <>
      <div
        className="income"
        style={{
          padding: 10,
          border: "1px solid silver",
          display: "inline",
          marginTop: 20,
        }}
      >
        <span>
          Income <span>$120</span>
        </span>
        <span style={{ marginRight: 20 }}></span>
        <span>
          Expense <span>$100</span>
        </span>
      </div>
    </>
  );
};
export default IncomeExpense;
