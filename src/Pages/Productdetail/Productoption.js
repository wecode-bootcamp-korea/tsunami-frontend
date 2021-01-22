import React, { Component } from "react";
import "./Productoption.js";

export default class Productoption extends Component {
  render() {
    const { options } = this.props;
    return (
      <div className="Productoption">
        <select className="dropdown">
          <option selected>선택해주세요</option>
          {options &&
            options.map((option, idx) => {
              return <option key={idx}>{option}</option>;
            })}
        </select>
      </div>
    );
  }
}
