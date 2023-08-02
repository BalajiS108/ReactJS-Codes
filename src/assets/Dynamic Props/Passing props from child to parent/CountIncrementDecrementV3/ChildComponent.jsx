const ChildComponent = ({ onMyIncrement, onMyDecrement, count }) => {
  //console.log("Props: ", onMyIncrement);
  const updateCounter = (op) => {
    //"+"
    console.log({ op });
    if (op === "-" && count === 0) {
      console.log("Value is 0");
      return;
    }
    op === "+" ? onMyIncrement() : onMyDecrement();
    //mthd();
  };
  return (
    <>
      <p>I am from child</p>
      <button onClick={() => updateCounter("+")}>Increment From child</button>
      <button onClick={() => updateCounter("-")}>Decrement from child</button>
      <button onClick={(e) => updateCounter(e)}>
        Event trigger from child
      </button>
      <button onClick={updateCounter}>Event trigger mth 2 from child</button>
    </>
  );
};

export default ChildComponent;
