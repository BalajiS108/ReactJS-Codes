import { useState } from "react";

const AccordianCV2 = ({ array }) => {
  const [show, setShow] = useState(false);

  // Function to handle button click and toggle show state
  const handle = () => {
    setShow(!show);
  };

  // Function to render the UI based on the array data
  const renderUI = () => {
    const list = [];

    for (let i = 0; i < array.length; i++) {
      const currentElem = array[i];
      const element = [];

      for (let item in currentElem) {
        if (item !== "id") {
          // Render key-value pair as a paragraph
          element.push(
            <p key={item}>
              <span className="key-name">{item}: </span>
              <span className="value">{currentElem[item]}</span>
            </p>
          );
        }
      }

      // Render a div containing the key-value pair elements
      list.push(<div key={currentElem.id}>{element}</div>);
    }

    return list;
  };

  return (
    <div>
      <button onClick={handle}>{!show ? "Show" : "Hide"}</button>
      {/* Render the UI if show is true */}
      {show && renderUI()}
    </div>
  );
};

export default AccordianCV2;
