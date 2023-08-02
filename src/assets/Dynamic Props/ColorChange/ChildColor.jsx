const ChildColor = (props) => {
  console.log("margin", props.marginValue);
  return (
    <body>
      <div
        style={{
          backgroundColor: "black",
          padding: props.paddingValue + 30,
          margin: props.marginValue + 30,
        }}
      >
        <h1 style={{ margin: 50 }}>Child Page</h1>
        <span
          style={{
            color: props.colornew1,
            backgroundColor: props.colornew2,
            padding: props.paddingValue,
            margin: props.marginValue,
          }}
        >
          {" "}
          My Current Text Color is "{props.colornew1}" & background color is "
          {props.colornew2}"
        </span>

        {/* <hr /> */}
      </div>
    </body>
  );
};

export default ChildColor;
