const ChildV2 = ({ IncrementCountChild, DecrementCountChild }) => {
  return (
    <div>
      <button onClick={IncrementCountChild}>Incement From Child</button>
      <button onClick={DecrementCountChild}>Decrement From Child</button>
    </div>
  );
};
export default ChildV2;
