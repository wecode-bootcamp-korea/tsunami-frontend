import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./SignupDone.scss";

class SignupDone extends Component {
  render() {
    return (
      <div className="SignupDone">
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

export default SignupDone;
