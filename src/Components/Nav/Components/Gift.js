import React, { Component } from "react";
import { Giftdata } from "../Navdata/Giftdata";
import { Link } from "react-router-dom";
import Contents from "./Contents/Contents";

export default class Gift extends Component {
  render() {
    return (
      <ul className="subnavBox">
        {Giftdata.map((menu) => {
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
