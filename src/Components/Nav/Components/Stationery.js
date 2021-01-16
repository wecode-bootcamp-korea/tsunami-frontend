import React, { Component } from "react";
import { Stationerydata } from "../Navdata/Stationerydata";
import { Link } from "react-router-dom";
import Contents from "./Contents/Contents";

export default class Stationery extends Component {
  render() {
    return (
      <ul className="subnavBox">
        {Stationerydata.map((el) => {
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
