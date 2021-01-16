import React, { Component } from "react";
import { Livingdata } from "../Navdata/Livingdata";
import { Link } from "react-router-dom";

export default class Living extends Component {
  render() {
    return (
      <li>
        <Link to="#">
          <span className="menuItem">
            <small>리빙&amp;라이프</small>
            Living&amp;Life
          </span>
        </Link>
        <div className="subnav">
          <ul>
            {Livingdata.map((el, idx) => {
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
