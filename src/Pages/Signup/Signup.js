import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

import "./Signup.scss";

class Signup extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="Signup">
          <h1>회원가입</h1>
          <div className="welcomeBox">
            <span>Stationery Lifestyle Shop</span>
            <span>쓰나미몰에 오신 걸 환영합니다.</span>
          </div>
          <div className="welcomeWrapper">
            <div className="btnBox">
              <Link to="/step">
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
        <Footer />
      </div>
    );
  }
}

export default Signup;
