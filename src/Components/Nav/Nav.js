import React, { Component } from "react";
import Navinfo from "./Navinfo";
import "./Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Navinfo />
            <div className="naviconBox">
              <span className="navIcon">
                <img src="/images/shopping-basket.svg" alt="shopping basket" />
                <img src="/images/user.svg" alt="user icon" />
                <img src="/images/search.svg" alt="search icon" />
              </span>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
