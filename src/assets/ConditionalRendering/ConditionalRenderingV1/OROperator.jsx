const OROperator = () => {
  return (
    <>
      <p>{0 || "NA"}</p>
      <p>{1 || "NA"}</p>
      <p>{0 || false || "NA"}</p>
      <p>{"Reetika" || "NA"}</p>
      <p>{"Deepak" || "NA"}</p>
      <p>{0 || null || undefined || false || "" || "NA"}</p>
    </>
  );
};

export default OROperator;
