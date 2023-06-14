const ChildColor = (props) => {
  return (
    <div>
      <h1>Child Page</h1>
      <p style={{ color: props.colornew }}>
        {" "}
        My Current Color is "{props.colornew}"{" "}
      </p>
      <hr />
    </div>
  );
};

export default ChildColor;
