import HOC1 from "./HOC2";
let count = 9;
const Child1HOC = ({ incrFontSize }) => {
  return (
    <>
      <HOC1 count={count} incrFontSize={incrFontSize}>
        <p onClick={incrFontSize}> I am in Child1</p>
      </HOC1>
    </>
  );
};
export default Child1HOC;
