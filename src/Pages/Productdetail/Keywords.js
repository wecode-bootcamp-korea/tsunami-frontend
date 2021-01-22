import React, { Component } from "react";
import "./Keywords.scss";

export default class Keywords extends Component {
  render() {
    const { keywords } = this.props;
    return (
      <div className="Keywords">
        <td>
          {keywords &&
            keywords.map((keyword, idx) => {
              return <span key={idx}>{keyword}</span>;
            })}
        </td>
      </div>
    );
  }
}
