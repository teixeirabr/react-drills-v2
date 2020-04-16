import React, { Component } from "react";
import axios from "axios";
import "./App.css";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: "",
    };
  }

  componentDidMount() {
    axios.get(`https://swapi.py4e.com/api/planets/3/`).then((res) => {
      this.setState({
        planets: res.data,
      });
      console.log(res.data);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Planet Name: {this.state.planets.name}</h1>
        <h1>Rotation Period: {this.state.planets.rotation_period}</h1>
        <h1>Climate: {this.state.planets.climate}</h1>
      </div>
    );
  }
}
