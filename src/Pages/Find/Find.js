import React, { Component } from "react";

import Header from "./Header/Header";
import FindId from "./FindId/FindID";
import FindPw from "./FindPw/FindPW";

import "./Find.scss";

class Find extends Component {
  constructor() {
    super();
    this.state = {
      isFindId: true,
    };
  }

  handleFind = (isFindId) => {
    this.setState({
      isFindId,
    });
  };

  render() {
    return (
      <div className="find">
        <Header />
        <div className="FindWrapper">
          <div className="findBox">
            <div
              className={`isFind ${this.state.isFindId && "active"}`}
              onClick={() => this.handleFind(true)}
            >
              아이디 찾기
            </div>
            <div
              className={`isFind ${!this.state.isFindId && "active"}`}
              onClick={() => this.handleFind(false)}
            >
              비밀번호 찾기
            </div>
          </div>
          {this.state.isFindId ? <FindId /> : <FindPw />}
        </div>
      </div>
    );
  }
}

export default Find;
