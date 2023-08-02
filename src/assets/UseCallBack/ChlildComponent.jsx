import { memo } from "react";

const ChildC = ({ data, onClickText }) => {
  console.log("Re-render: ", data);

  return (
    <p onClick={onClickText} style={{ backgroundColor: "tomato", padding: 12 }}>
      Data: {data}
    </p>
  );
};

const ChildV22Comp = memo(ChildC);

export default ChildV22Comp;
