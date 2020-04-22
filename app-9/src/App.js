import React, { Component } from "react";
import "./App.css";
import { HashRouter, Link } from "react-router-dom";
import router from "./router";

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <nav>
            <ul>
              <Link to="/">Home</Link>
              <Link to="./signup">Signup</Link>
              <Link to="./details">Details</Link>
            </ul>
          </nav>
          {router}
        </div>
      </HashRouter>
    );
  }
}
