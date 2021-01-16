import React, { Component } from "react";
import { Monamipetdata } from "../Navdata/Monamipetdata";
import { Link } from "react-router-dom";
import Contents from "./Contents/Contents";

export default class Monamipet extends Component {
  render() {
    return (
      <ul className="subnavBox">
        {Monamipetdata.map((el) => {
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
