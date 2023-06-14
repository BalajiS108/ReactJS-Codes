import { Component } from "react";

class Form extends Component {
  state = { fName: "", lName: "", email: "", age: "", gender: "" };
  showData = () => {};
  render() {
    return (
      <>
        <div>
          <label htmlFor="">First Name</label>
          <br />
          <input
            type="text"
            onChange={(e) => this.setState({ fName: e.target.value })}
            placeholder="Enter First Name"
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <br />
          <input
            type="text"
            onChange={(e) => this.setState({ lName: e.target.value })}
            placeholder="Enter Last Name"
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input
            type="email"
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="Enter Email Address"
          />
        </div>
        <div>
          <label htmlFor="">Age</label>
          <br />
          <input
            type="number"
            onChange={(e) => this.setState({ age: e.target.value })}
            placeholder="Enter Age"
          />
        </div>
        <button onClick={this.showData}>Submit Data</button>
        <p>Your First Name is:{this.state.fName}</p>
        <p>Your Last Name is:{this.state.lName}</p>
        <p>Your Email Id is:{this.state.email}</p>
        <p>Your Age is:{this.state.age}</p>
      </>
    );
  }
}
export default Form;
