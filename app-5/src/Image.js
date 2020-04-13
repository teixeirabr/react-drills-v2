import React, { Component } from "react";

export default class Image extends Component {
  render() {
    return (
      <div>
        <img width={"500 px"} src={this.props.img} alt="tesla" />
      </div>
    );
  }
}
