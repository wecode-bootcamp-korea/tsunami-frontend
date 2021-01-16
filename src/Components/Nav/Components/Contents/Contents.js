import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contents extends Component {
  render() {
    const { contents } = this.props;
    console.log(contents);
    return (
      <div>
        {contents.map((content) => {
          return (
            <Link to="#">
              <span>{content}</span>
            </Link>
          );
        })}
      </div>
    );
  }
}
