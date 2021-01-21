import React, { Component } from "react";
import Color from "./Components/Color";

export default class Inkcolor extends Component {
  render() {
    const { inkColor } = this.props;
    return (
      <div className="Inkcolor">
        <Color color={inkColor} />
      </div>
    );
  }
}
