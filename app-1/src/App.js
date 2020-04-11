import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  handleText = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          onChange={this.handleText}
          value={this.state.message}
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
}
