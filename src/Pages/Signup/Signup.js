import React, { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <div className="header">회원가입</div>
        <div className="stepWrapper">
          <div className="stepBox">
            <div className="step agree">STEP1.약관동의</div>
            <img src="/images/right-solid.svg" alt="화살표" />
            <div className="step info">STEP2.회원정보 입력</div>
            <img src="/images/right-solid.svg" alt="화살표" />
            <div className="step complet">STEP3.가입완료</div>
          </div>
          <div className="infoTop">
            <h3>회원기본정보</h3>
            <span>* 표시는 반드시 입력하셔야 하는 항목입니다.</span>
          </div>

          <div className="nameBox">
            <span className="name">이름 *</span>
            <input type="text" placeholder="이름 입력" className="name Input" />
          </div>
          <div className="idBox">
            <span className="id">아이디 *</span>
            <div className="inputBox">
              <input
                type="text"
                placeholder="5~16자, 영문, 숫자 또는 영문+숫자 조합"
                className="id Input"
              />
              <button type="submit" className="id btn">
                중복확인
              </button>
            </div>
          </div>
          <div className="pwBox">
            <span className="pw">비밀번호확인 *</span>
            <input
              type="password"
              placeholder="영문/숫자/특수문자 중 2가지 조합, 6~16자 이내"
              className="pw Input"
            />
          </div>
          <div className="emailBox">
            <span className="email">이메일 *</span>
            <div className="inputBox">
              <input
                type="email"
                placeholder="이메일 입력"
                className="email Input"
              />
              <button type="submit" className="email btn">
                중복확인
              </button>
            </div>
          </div>
          <button type="submit" className="loginBtn">
            아졸려
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
