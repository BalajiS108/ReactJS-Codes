import { Component } from "react";

class StateWithCC extends Component {
  state = {
    // BalajiCounter
    counter: 10,
    name: "Vikas",
  };

  onCounterUpdate = () => {
    // this.state.counter += 1;

    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <p>Counter {this.state.counter}</p>
        <button onClick={this.onCounterUpdate}>Increment</button>
      </div>
    );
  }
}

export default StateWithCC;
