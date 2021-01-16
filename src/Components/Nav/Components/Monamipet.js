import React, { Component } from "react";
import { Monamipetdata } from "../Navdata/Monamipetdata";
import { Link } from "react-router-dom";
import Contents from "./Contents/Contents";

export default class Monamipet extends Component {
  render() {
    return (
      <ul className="subnavBox">
        {Monamipetdata.map((menu) => {
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
