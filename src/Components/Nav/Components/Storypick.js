import React, { Component } from "react";
import { Storypickdata } from "../Navdata/Storypickdata";
import { Link } from "react-router-dom";
import Contents from "./Contents/Contents";

export default class Storypick extends Component {
  render() {
    return (
      <div className="storyPick">
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
      </div>
    );
  }
}
