import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navdata from "./Navdata";
import "./Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to="#" className="allmenuBtn">
              <span className="menu-trigger">
                <img src="/images/align-justify.svg" alt="hamberger" />
              </span>
            </Link>
            <h1 className="logo">
              <Link to="#">
                <img src="/images/logo.png" alt="tsunami logo" />
              </Link>
            </h1>
            <Navdata />
            <div className="navIcon">
              <img src="/images/shopping-basket.svg" alt="shopping basket" />
              <img src="/images/user.svg" alt="user icon" />
              <img src="/images/search.svg" alt="search icon" />
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
