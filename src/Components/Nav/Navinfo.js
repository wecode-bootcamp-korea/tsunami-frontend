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
      showMenu: true,
    });
  };
  outHandler = (e) => {
    this.setState({
      showMenu: false,
    });
  };

  render() {
    return (
      <div>
        <div className="navWrapper">
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
          <ul>
            {CATEGORY_ARR.map((el, idx) => {
              return (
                <span
                  key={el}
                  onMouseOver={() => this.overHandler(idx + 1)}
                  onMouseOut={() => this.overHandler()}
                  className="menuItem"
                >
                  <small>{el.small}</small>
                  {el.category}
                </span>
              );
            })}
          </ul>
        </div>
        {this.state.showMenu && (
          <div className="subnav">{MAPPING_OBJ[this.state.currentId]}</div>
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

const CATEGORY_ARR = [
  { small: "문구", category: "Stationery" },
  { small: "모나미펫", category: "MonamiPet" },
  { small: "리빙&라이프", category: "Living&Life" },
  { small: "기프트", category: "Gift" },
  { small: "스토리픽", category: "Story Pick" },
  { small: "이벤트", category: "Event" },
];
