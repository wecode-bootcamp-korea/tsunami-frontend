import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

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
      <div>
        <Nav />
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
        <Footer />
      </div>
    );
  }
}

export default Find;
