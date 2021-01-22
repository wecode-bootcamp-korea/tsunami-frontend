import React, { Component } from "react";

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
    const { isFindId } = this.state;
    return (
      <div className="Find">
        <p className="header">아이디/비밀번호 찾기</p>
        <div className="FindWrapper">
          <div className="findBox">
            <div
              className={`isFind ${isFindId && "active"}`}
              onClick={() => this.handleFind(true)}
            >
              아이디 찾기
            </div>
            <div
              className={`isFind ${!isFindId && "active"}`}
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
