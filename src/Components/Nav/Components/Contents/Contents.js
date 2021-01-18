import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contents extends Component {
  render() {
    const { contents } = this.props;
    return (
      <div>
        {contents.map((contents) => {
          return (
            <Link to="#" key="contents">
              <span>{contents}</span>
            </Link>
          );
        })}
      </div>
    );
  }
}
