import React, { Component } from "react";
import { Storypickdata } from "../Navdata/Storypickdata";
import { Link } from "react-router-dom";
import Contents from "./Contents/Contents";

export default class Storypick extends Component {
  render() {
    return (
      <ul className="subnavBox">
        {Storypickdata.map((menu) => {
          return (
            <li className="submenuBox">
              <Link to="#" className="mainItem">
                <span>{menu.title}</span>
              </Link>
              <ul>
                <li>
                  <Contents contents={menu.content} />
                </li>
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
}
