import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    console.log(this.props.input);
    return (
      <div>
        <h1>{this.props.e}</h1>
      </div>
    );
  }
}
