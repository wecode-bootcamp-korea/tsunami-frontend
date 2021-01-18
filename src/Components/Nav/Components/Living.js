import React, { Component } from "react";
import { Livingdata } from "../Navdata/Livingdata";
import { Link } from "react-router-dom";
import Contents from "./Contents/Contents";

export default class Living extends Component {
  render() {
    return (
      <div className="living">
        <ul className="subnavBox">
          {Livingdata.map((menu) => {
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
      </div>
    );
  }
}
