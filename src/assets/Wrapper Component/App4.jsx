const Wrapper = ({ children }) => {
  return <div style={{ color: "pink" }}>{children}</div>;
};

const App4 = () => {
  return (
    <Wrapper>
      <p className="pElem">Hare Krishna</p>
    </Wrapper>
  );
};
export default App4;
