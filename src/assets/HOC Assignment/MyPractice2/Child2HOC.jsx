import HOC1 from "./HOC2";
const Child2HOC = ({ incrFontSize }) => {
  let count = 10;
  return (
    <>
      <HOC1 count={count} incrFontSize={incrFontSize}>
        <p onMouseOver={incrFontSize}> I am in Child2</p>
      </HOC1>
    </>
  );
};
export default Child2HOC;
