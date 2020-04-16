import React, { Component } from "react";

class NewTask extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleAdd = () => {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={this.handleInputChange}
        />

        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default NewTask;
