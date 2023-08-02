import { useState } from "react";

const TransactionDetails = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(null);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Transaction Name"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Transaction Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <span>Item: {text} </span>
        <span> Amount:{amount}</span>
      </div>
    </>
  );
};
export default TransactionDetails;
