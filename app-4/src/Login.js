import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      login: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = () => {
    alert(`login: ${this.state.login} password: ${this.state.password}`);
  };

  render() {
    console.log(this.state.password);
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          name={"login"}
          placeholder="login"
          value={this.state.login}
        />
        <input
          type="password"
          placeholder="password"
          name={"password"}
          onChange={this.handleChange}
          value={this.state.password}
        />
        <button onClick={this.handleLogin}>login</button>
      </div>
    );
  }
}
