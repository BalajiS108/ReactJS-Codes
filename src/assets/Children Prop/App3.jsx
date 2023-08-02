import React from "react";

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="content">{children}</div>
    </div>
  );
};

const App3 = () => {
  return (
    <div>
      <Card title="Card 1">
        <p>This is the content of Card 1.</p>
        <p>Hare Krishna</p>
      </Card>
      {/* <Card title="Card 2">
        <p>This is the content of Card 2.</p>
        <button>Click Me</button>
      </Card> */}
    </div>
  );
};

export default App3;
