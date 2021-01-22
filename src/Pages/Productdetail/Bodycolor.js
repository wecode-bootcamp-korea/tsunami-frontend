import React, { Component } from "react";
import Color from "./Components/Color";
import "./Bodycolor.scss";

export default class Bodycolor extends Component {
  render() {
    const { bodyColor } = this.props;
    return (
      <div className="BodyColor">
        <Color color={bodyColor} />
      </div>
    );
  }
}
