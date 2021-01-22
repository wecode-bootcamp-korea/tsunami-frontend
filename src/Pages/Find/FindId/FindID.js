import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FINDID_API } from "../../../config";
import "./FindID.scss";

class FindID extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
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

  handleFindId = () => {
    const checkedNameBlank = this.state.name.length === 0;
    const checkedEmailBlank = this.state.email.length === 0;

    this.setState({
      checkedNameBlank,
      checkedEmailBlank,
    });
    if (checkedNameBlank || checkedEmailBlank) {
      return;
    }

    fetch(FINDID_API, {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        const USERNAME = result.USERNAME;

        if (USERNAME) {
          alert(`당신의 아이디는${USERNAME}입니다`);
          this.props.history.push("/");
          return;
        } else {
          alert("아이디가 엄서영! 회원가입부터 하시져!");
        }
      });
  };

  render() {
    return (
      <div className="FindID">
        <div className="findWrapper">
          <div className="name signBox">
            <span className="name">이름</span>
            <input
              type="text"
              placeholder="이름 입력"
              className="name Input"
              name="name"
              onChange={this.handleInput}
            />
          </div>
          {this.state.checkedNameBlank && (
            <span className="info active">이름를 입력해주세요</span>
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
          {!this.state.checkedNameBlank && this.state.checkedEmailBlank && (
            <span className="info active">이메일을 입력해주세요</span>
          )}
          <button
            type="submit"
            className="findIdBtn"
            onClick={this.handleFindId}
          >
            아이디 찾기
          </button>
          <div className="info box">
            <span>
              * 가입 당시 입력한 이름, 이메일로 아이디 일부를 확인할 수
              있습니다.
            </span>
            <span>
              * 아이디를 찾기 못하셨다면 고객센터(1544-2884)로 문의해 주세요.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FindID);
