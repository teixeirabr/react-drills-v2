import React, { Component } from "react";
import "./App.css";
import Image from "./Image";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      img: `https://www.tesla.com/sites/tesla/files/curatedmedia/model-s%402x.jpg`,
    };
  }

  render() {
    console.log(this.state.img);
    return (
      <div>
        <Image img={this.state.img} />
      </div>
    );
  }
}
