const HOC1 = ({ count, children, incrFontSize }) => {
  const [fontSize, setFontSize] = useState(10);
  const incrFontSize = () => {
    setFontSize((prev) => prev + 1);
  };
  if (count === 10) {
    return (
      <div
        style={{
          color: "blue",
          border: "1px solid red",
          marginTop: 20,
          fontSize: fontSize,
        }}
      >
        {/* {children} */}
      </div>
    );
  }
  return <children />;
};
export default HOC1;
