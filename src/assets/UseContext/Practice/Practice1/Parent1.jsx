import Child from "./Child";
import { MyContext } from "./Context";

const Parent1 = () => {
  const sharedData = "I am shared Data";
  const count = 10;

  return (
    <MyContext.Provider value={{ sharedData: sharedData, count: count }}>
      <Child />
    </MyContext.Provider>
  );
};
export default Parent1;
