import { useCallback } from "react";

const ParentC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const ChangeVal1 = () => {
    setCount1((prev) => prev + 1);
  };
  const ChangeVal2 = useCallback(() => {
    setCount2((prev) => prev + 1);
  }, [setCount2]);

  return (
    <>
      <button onClick={ChangeVal1}>Count1</button>
      <button onClick={ChangeVal2}>Count2</button>
      <ChildComp count1={count1} ChangeVal2={ChangeVal2} />
    </>
  );
};

export default ParentC;
