import { Component } from "react";

class FormCC extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    checkField: "",
    details: "",
    gender: "",
    selectcolor: "",
    date: "",
    option: "",
  };

  /*   onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }; */

  onInputChange = (e) => {
    console.log("e-target", e.target);
    const { name, value } = e.target;
    console.log("OnInputChange", { name, value });

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="form">
        <div>
          <label htmlFor="">Enter Your Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Enter your Email Id</label>
          <input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Enter Password</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Checkbox Field</label>
          <input
            name="checkField"
            type="checkbox"
            // value={this.state.check}
            checked={this.state.checkField}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Enter your details</label>
          <input
            name="details"
            type="textarea"
            value={this.state.details}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Enter your gender</label>
          <input
            name="gender"
            type="radio"
            value="male"
            // value={this.state.gender}
            checked={this.state.gender === "male"}
            onChange={this.onInputChange}
          />
          <label htmlFor="male">Male</label>
          <input
            name="gender"
            type="radio"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.onInputChange}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label htmlFor="">Select color</label>
          <input
            name="selectcolor"
            type="color"
            value={this.state.selectcolor}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Select Date</label>
          <input
            name="date"
            type="date"
            value={this.state.date}
            onChange={this.onInputChange}
          />
        </div>
        <div>
          <label htmlFor="">Select options</label>
          <select name="option">
            <option value="option1">Pune</option>
            <option value="option2">Mumbai</option>
            <option value="option3">Banglore</option>
            onChange={this.onInputChange}
          </select>
        </div>
        <p>
          Your Name is:{this.state.name} {this.state.value}
        </p>
        <p>
          Your Email ID is:{this.state.email} {this.state.value}
        </p>
        <p>
          Your password is:{this.state.password} {this.state.value}
        </p>
        <p>
          Are you satisfied with our service:{this.state.checkField}{" "}
          {this.state.value}
        </p>
        <p>
          Your Details are:{this.state.details} {this.state.value}
        </p>
        <p>
          Your Gender are:{this.state.gender} {this.state.value}
        </p>
        <p>
          Your Choosed color is:{this.state.color} {this.state.value}
        </p>
        <p>
          Your Date of Birth is:{this.state.date} {this.state.value}
        </p>
        <p>
          Your City is:{this.state.option} {this.state.value}
        </p>
      </div>
    );
  }
}

export default FormCC;
