import React, { Component } from "react";
import Todo from "./Todo";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      list: [],
    };
  }

  handleChanger = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddTask = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
    });
  };

  render() {
    console.log(this.state.input);
    let displayName = this.state.list.map((e, i) => {
      return <Todo key={i} e={e} />;
    });
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input type="text" name={"input"} onChange={this.handleChanger} />
        <button onClick={this.handleAddTask}>Add</button>
        {displayName}
        <Todo input={this.state.input} />
      </div>
    );
  }
  gi;
}
