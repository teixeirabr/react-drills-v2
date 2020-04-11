import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      filterFoods: "",
      foods: ["Apple", "Banana", "Sushi", "Cheese"],
    };
  }

  handleChange = (e) => {
    this.setState({
      filterFoods: e.target.value,
    });
  };

  render() {
    let displayFoods = this.state.foods
      .filter((e, i) => {
        return e
          .toLowerCase()
          .includes(this.state.filterFoods.toLocaleLowerCase());
      })
      .map((e, i) => {
        return <li key={i}>{e}</li>;
      });

    console.log(this.state.displayFoods);

    return (
      <div className="App">
        <input onChange={this.handleChange} value={this.state.filterFoods} />
        {displayFoods}
      </div>
    );
  }
}
