import React, { Component } from "react";
import { Link } from "react-router-dom";
import Stationery from "./Components/Stationery";
import MonamiPet from "./Components/Monamipet";
import Living from "./Components/Living";
import Gift from "./Components/Gift";
import Storypick from "./Components/Storypick";
import Event from "./Components/Event";

export default class Navinfo extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 0,
      showMenu: false,
    };
  }

  overHandler = (id) => {
    this.setState({
      currentId: id,
    });
  };

  usermenuHandler = (toggle) => {
    this.setState({
      showMenu: toggle,
    });
  };

  render() {
    return (
      <div className="Navinfo">
        <div className="navWrapper">
          <Link to="#" className="allmenuBtn">
            <span className="menu-trigger">
              <img src="/images/align-justify.svg" alt="hamberger" />
            </span>
          </Link>
          <h1 className="logo">
            <Link to="/">
              <img src="/images/logo.png" alt="tsunami logo" />
            </Link>
          </h1>
          <ul>
            {CATEGORY_LIST.map((title, idx) => {
              return (
                <Link to="/productlist" className="mainTitle">
                  <span
                    key={idx}
                    onMouseEnter={() => this.overHandler(idx + 1)}
                    onMouseLeave={() => this.overHandler(0)}
                    className="menuItem"
                  >
                    <small>{title.small}</small>
                    {title.category}
                  </span>
                </Link>
              );
            })}
          </ul>
          <div className="navIcon">
            <ul>
              <li>
                <Link to="#">
                  <img
                    src="/images/shopping-basket.svg"
                    alt="shopping basket"
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="userList"
                  onMouseEnter={() => this.usermenuHandler(true)}
                  onMouseLeave={() => this.usermenuHandler(false)}
                >
                  <img src="/images/user.svg" alt="user icon" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="/images/search.svg" alt="search icon" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="subnav"
          onMouseEnter={() => this.overHandler(this.state.currentId)}
          onMouseLeave={() => this.overHandler(0)}
        >
          {MAPPING_OBJ[this.state.currentId]}
        </div>
        {this.state.showMenu && (
          <div
            className="popinfo"
            onMouseEnter={() => this.usermenuHandler(true)}
            onMouseLeave={() => this.usermenuHandler(false)}
          >
            <div>
              <Link to="/signin" className="linkDeco">
                로그인
              </Link>
              <Link to="/signup" className="linkDeco">
                회원가입
              </Link>
              <Link to="/signin" className="linkDeco">
                비회원로그인
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const MAPPING_OBJ = {
  1: <Stationery />,
  2: <MonamiPet />,
  3: <Living />,
  4: <Gift />,
  5: <Storypick />,
  6: <Event />,
};

const CATEGORY_LIST = [
  { small: "문구", category: "Stationery" },
  { small: "모나미펫", category: "MonamiPet" },
  { small: "리빙&라이프", category: "Living&Life" },
  { small: "기프트", category: "Gift" },
  { small: "스토리픽", category: "StoryPick" },
  { small: "이벤트", category: "Event" },
];
