import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FINDPW_API } from "../../../config";
import "./FindPW.scss";

class FindPW extends Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      name: "",
      email: "",
      checkedIdBlank: false,
      checkedNameBlank: false,
      checkedEmailBlank: false,
    };
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleFindPw = () => {
    const checkedIdBlank = this.state.user_name.length === 0;
    const checkedNameBlank = this.state.name.length === 0;
    const checkedEmailBlank = this.state.email.length === 0;
    this.setState({
      checkedIdBlank,
      checkedNameBlank,
      checkedEmailBlank,
    });
    if (checkedIdBlank || checkedNameBlank || checkedEmailBlank) {
      return;
    }

    fetch(FINDPW_API, {
      method: "POST",
      body: JSON.stringify({
        username: this.state.user_name,
        name: this.state.name,
        email: this.state.email,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        window.localStorage.setItem(
          "PASSWORD",
          JSON.stringify(result.PASSWORD)
        );
        const PASSWORD = window.localStorage.getItem("PASSWORD");
        if (PASSWORD !== "undefined") {
          alert(`당신의 임시비밀번호는${PASSWORD}입니다!`);
          this.props.history.push("/");
          return;
        } else {
          alert("잘못된정보입니다! 기억하세요!");
        }
      });
  };

  render() {
    return (
      <div className="FindPW">
        <div className="findPwWrapper">
          <div className="id signBox">
            <span className="id">아이디</span>
            <input
              type="text"
              placeholder="아이디 입력"
              className="id Input"
              name="user_name"
              onChange={this.handleInput}
            />
          </div>
          {this.state.checkedIdBlank && (
            <span className="info active">아이디를 입력해주세요</span>
          )}
          <div className="name signBox">
            <span className="pw">이름</span>
            <input
              type="text"
              placeholder="이름 입력"
              className="name Input"
              name="name"
              onChange={this.handleInput}
            />
          </div>
          {!this.state.checkedIdBlank && this.state.checkedNameBlank && (
            <span className="info active">이름을 입력해주세요</span>
          )}
          <div className="email signBox">
            <span className="email">이메일</span>
            <input
              type="email"
              placeholder="이메일 입력"
              className="email Input"
              name="email"
              onChange={this.handleInput}
            />
          </div>
          {!this.state.checkedIdBlank &&
            !this.state.checkedNameBlank &&
            this.state.checkedEmailBlank && (
              <span className="info active">이메일을 입력해주세요</span>
            )}
          <button type="submit" className="findBtn" onClick={this.handleFindPw}>
            비밀번호 찾기
          </button>
          <div className="info box">
            <span>
              * 회원 가입시 입력한 이메일로 임시비밀번호를 발송해드립니다.
            </span>
            <span>
              * 로그인 후, 마이페이지 - 회원정보수정에서 비밀번호를
              수정해주세요.
            </span>
            <span>
              * 비밀번호 찾기에 어려움이 있으시면 고객센터(1544-2884)로 문의해
              주세요.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FindPW);
