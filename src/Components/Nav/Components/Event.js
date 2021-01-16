import React, { Component } from "react";
import { Eventdata } from "../Navdata/Eventdata";
import { Link } from "react-router-dom";
import Contents from "./Contents/Contents";

export default class Event extends Component {
  render() {
    return (
      <ul className="subnavBox">
        {Eventdata.map((el) => {
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
