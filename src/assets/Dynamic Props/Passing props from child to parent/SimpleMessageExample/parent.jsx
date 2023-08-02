import { useState } from "react";
import ChildMessage from "./child";

const ParentMessage = () => {
  const [msg, setMsg] = useState("Hello");
  const [msg2P, setmsg2P] = useState("");
  console.log("msg2P=", msg2P);

  return (
    <div>
      <p>message from Child to Parent={messageToParent}</p>
      <ChildMessage message={msg} msg2P={messageToParent} />
    </div>
  );
};

export default ParentMessage;
