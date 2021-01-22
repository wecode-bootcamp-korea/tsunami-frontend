import React, { Component } from "react";
import "./Weight.scss";

export default class Weight extends Component {
  render() {
    const { weight } = this.props;
    return (
      <div className="Weight">
        <td>
          <ul>
            {weight &&
              weight.map((thickness, idx) => {
                return (
                  <li key={idx}>
                    <img src={thickness.url} alt="두께" />
                    <span>{thickness.name}</span>
                  </li>
                );
              })}
          </ul>
        </td>
      </div>
    );
  }
}
