import React, { Component } from "react";
import { Monamipetdata } from "../Navdata/Monamipetdata";
import { Link } from "react-router-dom";

export default class Monamipet extends Component {
  render() {
    return (
      <div>
        <li>
          <Link to="#">
            <span className="menuItem">
              <small>모나미펫</small>
              MonamiPet
            </span>
          </Link>
          {Monamipetdata.map((el, idx) => {
            return (
              <div className="subnav">
                <ul>
                  <Link to="#" className="mainTitle">
                    <span>{el.main_title}</span>
                  </Link>
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
                </ul>
              </div>
            );
          })}
        </li>
      </div>
    );
  }
}
