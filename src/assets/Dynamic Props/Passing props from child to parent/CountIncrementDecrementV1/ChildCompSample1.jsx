const ChildCompSample1 = ({ onMyDecrement }) => {
  return (
    <>
      <p>I am from Child 2</p>
      <button onClick={onMyDecrement}>Decrement from Child</button>
    </>
  );
};
export default ChildCompSample1;
