import { useRef } from "react";
const OTPFun = () => {
  const OTPRef1 = useRef(null);
  const OTPRef2 = useRef(null);
  const OTPRef3 = useRef(null);
  const OTPRef4 = useRef(null);

  const handleInputChange = (currentRef, nextRef) => {
    if (currentRef.current.value.length === 1) {
      nextRef.current.focus();
    }
  };

  return (
    <>
      <input
        type="text"
        ref={OTPRef1}
        onChange={() => handleInputChange(OTPRef1, OTPRef2)}
      />
      <input
        type="text"
        ref={OTPRef2}
        onChange={() => handleInputChange(OTPRef2, OTPRef3)}
      />
      <input
        type="text"
        ref={OTPRef3}
        onChange={() => handleInputChange(OTPRef3, OTPRef4)}
      />
      <input
        type="text"
        ref={OTPRef4}
        onChange={() => handleInputChange(OTPRef4, OTPRef4)}
      />
    </>
  );
};
export default OTPFun;
