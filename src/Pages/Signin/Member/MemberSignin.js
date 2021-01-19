import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import SnsLogin from "../SnsLogin/SnsLogin";
import { SIGNIN_API } from "../../../config";

import "./MemberSignin.scss";

class MemberSignin extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      checkedIdBlank: false,
      checkedPwBlank: false,
    };
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = () => {
    const checkedIdBlank = this.state.id.length === 0;
    const checkedPwBlank = this.state.pw.length === 0;

    this.setState({
      checkedIdBlank,
      checkedPwBlank,
    });
    if (checkedIdBlank || checkedPwBlank) {
      return;
    }
    fetch(SIGNIN_API, {
      method: "POST",
      body: JSON.stringify({
        username: this.state.id,
        password: this.state.pw,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        window.localStorage.setItem("TOKEN", JSON.stringify(result.TOKEN));
        const TOKEN = window.localStorage.getItem("TOKEN");
        if (TOKEN !== "undefined") {
          alert("회원님 환영합니다!");
          this.props.history.push("/");
          return;
        } else {
          alert(
            "등록돠지 않은 아이디이거나 \n아이디 또는 비밀번호를 잘못 입력하셨습니다."
          );
        }
      });
  };

  render() {
    return (
      <div className="MemberSignin">
        <div className="sign Wrapper">
          <div className="id signBox">
            <span className="id">아이디</span>
            <input
              type="text"
              placeholder="아이디 입력"
              className="id Input"
              onChange={this.handleInput}
              name="id"
            />
          </div>
          {this.state.checkedIdBlank && (
            <span className="info active">아이디를 입력해주세요</span>
          )}
          <div className="pw signBox">
            <span className="pw">비밀번호</span>
            <input
              type="password"
              placeholder="비밀번호 입력"
              className="pw Input"
              onChange={this.handleInput}
              name="pw"
            />
          </div>
          {!this.state.checkedIdBlank && this.state.checkedPwBlank && (
            <span className="info active">비밀번호를 입력해주세요</span>
          )}

          <button type="submit" className="loginBtn" onClick={this.handleLogin}>
            로그인
          </button>
        </div>
        <div className="signHelperBox">
          <p className="idFind">
            <Link to="/find">아이디 찾기</Link>
          </p>
          <p className="pwFind">
            <Link to="/find">비밀번호 찾기</Link>
          </p>
          <p className="gotoSignup">
            <Link to="/signup">화원가입</Link>
          </p>
        </div>
        <SnsLogin />
      </div>
    );
  }
}

export default withRouter(MemberSignin);
