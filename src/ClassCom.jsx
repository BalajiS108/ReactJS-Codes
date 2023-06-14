import { Component } from "react";
import './App.css'
class ClassComp extends Component {
  render() {
    return (
      <div>
        <p>Hello {10 + 20}</p>
        <p>From CC</p>
      </div>
    );
  }
}

export default ClassComp;