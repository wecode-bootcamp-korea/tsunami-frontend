import React, { Component } from "react";
import { Livingdata } from "../Navdata/Livingdata";
import { Link } from "react-router-dom";
import Contents from "./Contents/Contents";

export default class Living extends Component {
  render() {
    return (
      <div className="Living">
        <ul className="subnavBox">
          {Livingdata.map((menu) => {
            return (
              <li className="submenuBox" key={menu}>
                <Link to="#" className="mainItem">
                  <span>{menu.title}</span>
                </Link>
                <Contents contents={menu.content} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
