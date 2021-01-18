import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Signup1.scss";

class Signup1 extends Component {
  render() {
    return (
      <div className="Signup1">
        <header>회원가입</header>
        <div className="welcomeBox">
          <span>Stationery Lifestyle Shop</span>
          <span>쓰나미몰에 오신 걸 환영합니다.</span>
        </div>
        <div className="welcomeWrapper">
          <div className="btnBox">
            <Link to="/signup2">
              <button>회원가입하기</button>
            </Link>
          </div>
          <div className="eventBox">
            <span>쓰나미몰 회원 공통 혜택</span>
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

export default Signup1;
