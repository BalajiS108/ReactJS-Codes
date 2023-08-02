import { useState } from "react";
import Childlist from "./ChildData";

export default function Parentinput() {
  const [data, setdata] = useState("");
  const [childdata, setchilddata] = useState([]);
  const setdatafn = (e) => {
    let { value } = e.target;
    setdata(() => {
      return value;
    });
  };
  let newdata;
  const expandlist = (elm) => {
    newdata = elm;
    console.log("newdata", newdata);
  };

  const senddata = () => {
    setchilddata((lastdata) => {
      newdata = [newdata, data];
      lastdata = [...lastdata, newdata];

      console.log("updated data:", lastdata);
      console.log("child Data=", childdata);
      return lastdata;
    });
    // setchilddata([...childdata, data]);

    console.log("child Data=", childdata);
  };

  return (
    <>
      <input name="" type="text" value={data} onChange={setdatafn} />
      <button onClick={senddata}>click me</button>
      <Childlist listToParent={expandlist} newdata={childdata} />
    </>
  );
}
