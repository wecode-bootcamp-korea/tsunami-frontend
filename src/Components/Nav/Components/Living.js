import React, { Component } from "react";
import { Livingdata } from "../Navdata/Livingdata";
import { Link } from "react-router-dom";
import Contents from "./Contents/Contents";

export default class Living extends Component {
  render() {
    return (
      <ul className="subnavBox">
        {Livingdata.map((el) => {
          return (
            <li className="submenuBox">
              <Link to="#" className="mainItem">
                <span>{el.title}</span>
              </Link>
              <ul>
                <li>
                  <Contents contents={el.content} />
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
}