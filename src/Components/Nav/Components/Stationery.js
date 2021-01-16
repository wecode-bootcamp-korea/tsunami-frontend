import React, { Component } from "react";
import { Stationerydata } from "../Navdata/Stationerydata";
import { Link } from "react-router-dom";

export default class Stationery extends Component {
  render() {
    return (
      <li>
        <Link to="#">
          <span className="menuItem">
            <small>문구</small>
            Stationery
          </span>
        </Link>
        <div className="subnav">
          <ul>
            {Stationerydata.map((el, idx) => {
              return (
                <li>
                  <Link to="#" className="mainItem">
                    <span>{el.title}</span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="#" key={idx}>
                        <span>{el.content}</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </li>
    );
  }
}
