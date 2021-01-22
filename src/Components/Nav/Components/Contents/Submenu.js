import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contents from "./Contents";

export default class Submenu extends Component {
  render() {
    const { navData } = this.props;
    return (
      <div className="Submenu">
        <ul className="subnavBox">
          {navData.map((menu) => {
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
