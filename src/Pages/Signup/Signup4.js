import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Signup4.scss";

class Signup4 extends Component {
  render() {
    return (
      <div className="Signup4">
        <header>회원가입</header>
        <div className="stepWrapper">
          <div className="stepBox">
            <div className="step agree">STEP1.약관동의</div>
            <img src="/images/right-solid.svg" alt="화살표" />
            <div className="step info">STEP2.회원정보 입력</div>
            <img src="/images/right-solid.svg" alt="화살표" />
            <div className="step complete">STEP3.가입완료</div>
          </div>
        </div>
        <div className="completeWrapper">
          <div className="completeBox">
            <span>WELCOME! 회원가입이 완료되었습니다.</span>
            <Link to="/">
              <button>메인으로</button>
            </Link>
          </div>
          <div className="eventBox">
            <span>신규회원 공통 혜택</span>
            <div className="couponWrapper">
              <div className="couponBox">
                <img src="/images/sale.png" alt="sale" />
                <label>99% 할인 쿠폰</label>
              </div>
              <div className="couponBox">
                <img src="/images/sale.png" alt="sale" />
                <label>98% 할인 쿠폰</label>
              </div>
              <div className="couponBox">
                <img src="/images/sale.png" alt="sale" />
                <label>97% 할인 쿠폰</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup4;
