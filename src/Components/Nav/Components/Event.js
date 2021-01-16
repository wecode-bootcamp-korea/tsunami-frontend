import React, { Component } from "react";
import { Eventdata } from "../Navdata/Eventdata";
import { Link } from "react-router-dom";

export default class Event extends Component {
  render() {
    return (
      <li>
        <Link to="#">
          <span className="menuItem">
            <small>이벤트</small>
            Event
          </span>
        </Link>
        <div className="subnav">
          <ul>
            {Eventdata.map((el, idx) => {
              return (
                <li>
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
