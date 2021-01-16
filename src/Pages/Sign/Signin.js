import React, { Component } from "react";
import "./Signin.scss";

class Signin extends Component {
  render() {
    return (
      <div className="signin">
        <div className="header">로그인</div>
        <div className="memberWrapper">
          <div className="memberBox">
            <div className="member">회원</div>
            <div className="member unmember">비회원 (주문조회)</div>
          </div>
          <div className="idBox">
            <span className="id">아이디</span>
            <input type="text" placeholder="아이디 입력" className="id Input" />
          </div>
          <div className="pwBox">
            <span className="pw">비밀번호</span>
            <input
              type="password"
              placeholder="비밀번호 입력"
              className="pw Input"
            />
          </div>
          <button type="submit" className="loginBtn">
            로그인
          </button>
          <div className="signHelperBox">
            <p className="idFind">아이디 찾기</p>
            <p className="pwFind">비밀번호 찾기</p>
            <p className="gotoSignup">회원가입</p>
          </div>
          <div className="snsWrapper">
            <div className="snsLogin">SNS 로그인</div>
            <div className="snsImagesWrapper">
              <div className="Box naver">
                <img
                  src="/images/naver.png"
                  alt="never"
                  className="Logo naver"
                />
                <p className="naver">NAVER</p>
              </div>
              <div className="Box kakao">
                <img
                  src="/images/kakao.png"
                  alt="gagao"
                  className="Logo kakao"
                />
                <p className="kakao">KAKAO</p>
              </div>
              <div className="Box facebook">
                <img
                  src="/images/facebook.png"
                  alt="acebook"
                  className="Logo facebook"
                />
                <p className="facebook">FACEBOOK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
