import React, { Component } from "react";

import "./SnsLogin.scss";

class SnsLogin extends Component {
  render() {
    return (
      <div className="snsWrapper">
        <div className="snsLogin">SNS 로그인</div>
        <div className="snsImagesWrapper">
          <div className="Box naver">
            <img src="/images/naver.png" alt="never" className="Logo naver" />
            <p className="naver">NAVER</p>
          </div>
          <div className="Box kakao">
            <img src="/images/kakao.png" alt="gagao" className="Logo kakao" />
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
    );
  }
}

export default SnsLogin;
