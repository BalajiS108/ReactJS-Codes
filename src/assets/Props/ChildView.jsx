// const ChildView = (meraprops) => {   //This is way1

const ChildView = ({ name, city, mobno }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        height: 140,
        width: 100,
        padding: 12,
        boxShadow: "silver 0px 0px 1px 1px",
      }}
    >
      <p>
        {/* {meraprops.name} from {meraprops.city} mobile no.
        {meraprops.mobno}    This is way1 */}
      </p>
      <p>
        {name} from {city} with mobno{mobno}
      </p>
    </div>
  );
};
export default ChildView;
