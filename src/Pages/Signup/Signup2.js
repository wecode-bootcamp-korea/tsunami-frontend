import React, { Component } from "react";

import Useagreement from "./Useagreement/Useagreement";
import Useagreement2 from "./Useagreement/Useagreement2";

import "./Signup2.scss";
import Useagreement3 from "./Useagreement/Useagreement3";

class Signup2 extends Component {
  constructor() {
    super();
    this.state = {
      is_all_agreed: false,
      is_mall_agreed: false,
      is_tte_agreed: false,
      is_personaldata_agreed: false,
    };
  }

  handleAllagreeCheckbox = (e) => {
    const { name } = e.target;
    this.setState({
      [name]: true,
    });
  };

  render() {
    return (
      <div className="signup">
        <header>회원가입</header>
        <div className="stepWrapper">
          <div className="stepBox">
            <div className="step agree">STEP1.약관동의</div>
            <img src="/images/right-solid.svg" alt="화살표" />
            <div className="step info">STEP2.회원정보 입력</div>
            <img src="/images/right-solid.svg" alt="화살표" />
            <div className="step complete">STEP3.가입완료</div>
          </div>
          <div className="allAgreeBox">
            <input
              className="agreeCheckbox"
              type="checkbox"
              name="is_all_agreed"
              checked="true"
              onClick={this.handleAllagreeCheckbox}
            />
            <label>쓰나미몰 통합회원 가입 약관 모두 동의</label>
          </div>

          <div className="essentialWrapper">
            <div className="essentialBox">
              <input
                className="essential"
                type="checkbox"
                name="is_mall_agreed"
              />
              <label>쓰나미몰 서비스 이용약관(필수)</label>
              <button />
            </div>
            <Useagreement />

            <div className="essentialBox">
              <input
                className="essential"
                type="checkbox"
                name="is_tte_agreed"
              />
              <label>쓰나르떼 서비스 이용약관(필수)</label>
              <button />
            </div>

            <Useagreement2 />
            <div className="essentialBox">
              <input
                className="essential"
                type="checkbox"
                name="is_personaldata_agreed"
              />
              <label>개인정보 수집/이용동의(필수)</label>
              <button />
            </div>
            <Useagreement3 />
          </div>
          <div className="buttonBox">
            <button type="submit" className="goto step1">
              취소
            </button>
            <button type="submit" className="goto step3">
              확인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup2;
