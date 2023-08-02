import { useEffect, useState } from "react";

const MouseTracker = () => {
  useEffect(() => {
    console.log("I'm mounting now");

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      console.log("Mouse coordinates:", clientX, clientY);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      console.log("I'm unmounting now");
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div>Move the mouse to see the coordinates in the console.</div>;
};

export const Preview = () => {
  const [show, setShow] = useState(false);

  if (!show) {
    return (
      <div>
        <p>No show here</p>
        <button onClick={() => setShow((val) => !val)}>Show Now</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => setShow((val) => !val)}>Hide Now</button>
      <MouseTracker />
    </div>
  );
};
