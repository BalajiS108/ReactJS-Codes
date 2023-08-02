import { useRef } from "react";
const FormWithUseRef = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const onShowValue = () => {
    console.log("name=", nameRef.current.value);
    console.log("email=", emailRef.current.value);
  };
  console.log("re-render");

  return (
    <>
      <input ref={nameRef} type="text" placeholder="name" />
      <input ref={emailRef} type="text" placeholder="email" />
      <button onClick={onShowValue}>Show Value</button>
    </>
  );
};
export default FormWithUseRef;
