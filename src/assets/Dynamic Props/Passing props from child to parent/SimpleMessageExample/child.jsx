import { useState } from "react";

const ChildMessage = ({ message, messageToParent }) => {
  const [Msg, setMsg] = useState("Welcome");
  const [showMessage, setShowMessage] = useState(false); // State to track if the message should be displayed

  function showMsg() {
    if (message !== "") {
      //   messageToParent = msgc;

      //   setMsg(messageToParent);
      console.log("messageToParent", messageToParent);
      setShowMessage(true); // Set the state to display the message
    }
  }
  const msg2P = () => Msg;

  return (
    <div>
      {/* {setMsgc} */}
      {showMessage && <p>{message}</p>}
      {/* Display the message conditionally */}
      <button onClick={showMsg}>Show Message from Parent To Child</button>
    </div>
  );
};

export default ChildMessage;
