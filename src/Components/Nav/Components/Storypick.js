import React, { Component } from "react";
import { Storypickdata } from "../Navdata/Storypickdata";
import { Link } from "react-router-dom";

export default class Storypick extends Component {
  render() {
    return (
      <li>
        <Link to="#">
          <span className="menuItem">
            <small>스토리픽</small>
            Story Pick
          </span>
        </Link>
        <div className="subnav">
          <ul>
            {Storypickdata.map((el, idx) => {
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
