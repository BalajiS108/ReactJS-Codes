import { useState } from "react";

const Counter1 = () => {
  const [counter, setCounter] = useState(10);
  const [counter2] = useState(1);

  console.log("Re-Render: Counter: ", counter);

  const onBtnClick = () => {
    /*    setCounter(counter + 1); // 0 + 1
    setCounter(counter + 1); // 0 + 1
    setCounter2(counter2 + 1); // 1+1
    setCounter(counter + 1); // 0 + 1
    setCounter(counter + 1); // 0 + 1
    setCounter2(counter2 + 1); // 1+1 */
    // Stale Closure example
    /*  setCounter(counter + 1); // 0 +1
    setCounter(counter + 2); // 0 + 2
    setCounter(counter + 3); // 0 +3
    setCounter(counter + 4); // 0 + 4 */

    setCounter((lastState) => {
      console.log("last State Value:-", lastState);
      console.log("1st incr");

      return lastState + 1;
    });

    setCounter((lastState) => {
      console.log("2nd incr");

      return lastState + 2;
    });

    setCounter((lastState) => {
      console.log("3rd incr");

      return lastState + 3;
    });

    const newState = (lastState) => {
      console.log("4th incr");

      return lastState + 4;
    };

    setCounter(newState); // -> setCounter(ArrowFunf) -> setCounter(lastState + 4)

    setCounter((lastState) => lastState + 5);
  };

  return (
    <div>
      <p>
        Counter: {counter} {counter2}
      </p>
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
  );
};

export default Counter1;
