import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const CompA = () => {
  return (
    <div>
      <div>I am Component A</div>
    </div>
  );
};
const CompB = () => {
  return (
    <div>
      <div>I am Component B</div>
    </div>
  );
};
const CompC = () => {
  return (
    <div>
      <div>I am Component C</div>
    </div>
  );
};

const App2 = () => {
  return (
    <div>
      <Router>
        <div>
          <Link to="/compA">Comp A</Link>
        </div>
        <div>
          <Link to="/compB">Comp B</Link>
        </div>
        <div>
          <Link to="/compB">Comp C</Link>
        </div>
        <Routes>
          <Route path="/compA" element={<CompA />}></Route>
          <Route path="/compB" element={<CompB />}></Route>
          <Route path="/compC" element={<CompC />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
export default App2;
