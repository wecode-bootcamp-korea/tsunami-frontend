import React, { Component } from "react";
import { Eventdata } from "../Navdata/Eventdata";
import { Link } from "react-router-dom";
import Contents from "./Contents/Contents";

export default class Event extends Component {
  render() {
    return (
      <div className="event">
        <ul className="subnavBox">
          {Eventdata.map((menu) => {
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
