import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      food: ["cheese", "apple", "banana", "ice cream"],
    };
  }

  render() {
    let displayFood = this.state.food.map((e, i) => {
      return <h1>{e}</h1>;
    });
    return <div className="App">{displayFood}</div>;
  }
}
