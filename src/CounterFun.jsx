import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(10);
  const [counter1, setCounter1] = useState(100);

  console.log("Re-Render: Counter: ", counter);

  const onBtnClick = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);

    console.log("Incr Counter");
  };

  const onBtnClickDecr = () => {
    setCounter1(counter1 - 1);
    console.log("Decr Counter");
  };

  return (
    <>
      <div>
        <p>Counter: {counter}</p>
        {/*       {onBtnClick()}*/}
        {/*       <button onClick={onBtnClick()}>Increment via Func</button>
         */}{" "}
        <button
          onClick={function () {
            onBtnClick();
          }}
        >
          Increment via Func
        </button>
        <button onClick={() => onBtnClick()}>Increment via Func</button>
        <button onClick={onBtnClick}>Increment via CB</button>
      </div>

      <p>Counter Decrement:{counter1}</p>
      <div>
        <button onClick={onBtnClickDecr}>Decr Counter</button>
      </div>
    </>
  );
};

export default Counter;
