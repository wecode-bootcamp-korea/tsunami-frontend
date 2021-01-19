import React, { Component } from "react";
import Navinfo from "./Navinfo";
import "./Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <header>
          <nav>
            <Navinfo />
          </nav>
        </header>
      </div>
    );
  }
}
