import React, { Component } from "react";
import "./Signin.scss";

class Signin extends Component {
  render() {
    return (
      <div className="signin">
        <div className="login">로그인</div>
        <div className="member_box">
          <div className="member">회원</div>
          <div className="unmember">비회원 (주문조회)</div>
        </div>
        <span className="id">아이디</span>
        <input type="text" placeholder="아이디 입력" className="id_input" />
        <span className="pw">비밀번호</span>
        <input
          type="password"
          placeholder="비밀번호 입력"
          className="pw_input"
        />
        <button type="submit" className="login_btn">
          로그인
        </button>
        <span className="id_find">아이디 찾기</span>
        <span className="pw_find">비밀번호 찾기</span>
        <span className="signup">회원가입</span>
        <div className="sns_wrapper">
          <div className="sns_login">SNS 로그인</div>
          <div className="sns_images_wrapper">
            <div className="naver_box">
              <img
                src="/images/naver.png"
                alt="never"
                width="55"
                className="naver_logo"
              />
              <p className="naver">NAVER</p>
            </div>
            <div className="kakao_box">
              <img
                src="/images/kakao.png"
                alt="gagao"
                width="55"
                className="kakao_logo"
              />
              <p className="kakao">KAKAO</p>
            </div>
            <div className="facebook_box">
              <img
                src="/images/facebook.png"
                alt="acebook"
                width="55"
                className="facebook_logo"
              />
              <p className="facebook">FACEBOOK</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
