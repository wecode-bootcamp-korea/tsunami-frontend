import React, { Component } from "react";
import "./Color.scss";

export default class Color extends Component {
  render() {
    const { color } = this.props;
    return (
      <div className="Color">
        <td>
          <ul>
            {color &&
              color.map((color, idx) => {
                return (
                  <li key={idx}>
                    <img src={color.url} alt="색상" />
                    <span>{color.name}</span>
                  </li>
                );
              })}
          </ul>
        </td>
      </div>
    );
  }
}
