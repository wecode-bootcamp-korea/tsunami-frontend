import React, { Component } from "react";
import { Storypickdata } from "../Navdata/Storypickdata";
import { Link } from "react-router-dom";
import Contents from "./Contents/Contents";

export default class Storypick extends Component {
  render() {
    return (
      <ul className="subnavBox">
        {Storypickdata.map((el) => {
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
