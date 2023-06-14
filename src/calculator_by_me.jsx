import { Component } from "react";

class Calculator1 extends Component {
  state = {
    a: "",
    b: "",
    result: 0,
  };
  add = () => {
    const addition = Number(this.state.a) + Number(this.state.b);
    this.setState({ result: addition });
  };
  render() {
    return (
      <>
        <div>
          <input
            type="number"
            placeholder="enter first no"
            onChange={(e) => this.setState({ a: e.target.value })}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="enter first no"
            onChange={(e) => this.setState({ b: e.target.value })}
          />
        </div>
        <div>
          <button onClick={this.add}>Add</button>
        </div>
        <p>Result is = {this.state.result}</p>
      </>
    );
  }
}

export default Calculator1;
