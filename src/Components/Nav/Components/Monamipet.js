import React, { Component } from "react";
import { Monamipetdata } from "../Navdata/Monamipetdata";
import { Link } from "react-router-dom";
import Contents from "./Contents/Contents";

export default class Monamipet extends Component {
  render() {
    return (
      <div className="Monamipet">
        <ul className="subnavBox">
          {Monamipetdata.map((menu) => {
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
