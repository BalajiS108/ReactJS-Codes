import ChildView from "./ChildView";

const ParentView = () => {
  return (
    <div style={{ display: "flex", flexWrap: "nowrap", gap: 20 }}>
      <ChildView name="Balaji" city="Pune" mobno="1233" />
      <ChildView name="Sohail" city="Bhopal" mobno="2345" />
      <ChildView name="Khusi" city="Bhopal" mobno="3456" />
      {/* <ChildView name="Reetika" city="Delhi" />
      <ChildView name="Arun" city="Morena" />
      <ChildView name="Varun" city="Delhi" />
      <ChildView name="Sachin" city="Bangalore" />
      <ChildView name="Deepak" city="Bihar" />
      <ChildView name="Manasvi" city="Bhopal" /> */}
    </div>
  );
};

export default ParentView;
