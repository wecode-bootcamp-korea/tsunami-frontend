import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Useagreement from "../Useagreement/Useagreement";
import Useagreement2 from "../Useagreement/Useagreement2";
import Useagreement3 from "../Useagreement/Useagreement3";
import "./Agree.scss";

class Agree extends Component {
  constructor() {
    super();
    this.state = {
      isAllAgreed: false,
      isMallAgreed: false,
      isTteAgreed: false,
      isPersonaldataAgreed: false,
      mallToggle: true,
      tteToggle: false,
      infoToggle: false,
    };
  }

  handleAllagreeCheckbox = (e) => {
    const { checked } = e.target;
    this.setState({
      isAllAgreed: checked,
      isMallAgreed: checked,
      isTteAgreed: checked,
      isPersonaldataAgreed: checked,
    });
  };

  handleAgreeCheckbox = (e) => {
    const { name, checked } = e.target;

    this.setState(
      {
        [name]: checked,
      },
      this.changeBoxBool
    );
  };

  changeBoxBool = () => {
    const { isMallAgreed, isTteAgreed, isPersonaldataAgreed } = this.state;

    this.setState({
      isAllAgreed: isMallAgreed && isTteAgreed && isPersonaldataAgreed,
    });
  };

  handleAgreeBtn = (e) => {
    const { name } = e.target;
    this.setState({
      [name]: !this.state[name],
    });
  };

  handlegotostep2box = () => {
    const { isMallAgreed, isTteAgreed, isPersonaldataAgreed } = this.state;
    if (isMallAgreed && isTteAgreed && isPersonaldataAgreed) {
      this.props.setStep(2);
    } else {
      alert("이용약관에 모두 동의해주세요!");
    }
  };

  render() {
    const {
      isAllAgreed,
      isMallAgreed,
      isTteAgreed,
      isPersonaldataAgreed,
      mallToggle,
      tteToggle,
      infoToggle,
    } = this.state;
    return (
      <div className="Agree">
        <div className="stepWrapper">
          <div className="allAgreeBox">
            <input
              className="agreeCheckbox"
              type="checkbox"
              name="isAllAgreed"
              checked={isAllAgreed}
              onChange={this.handleAllagreeCheckbox}
            />
            <label>쓰나미몰 통합회원 가입 약관 모두 동의</label>
          </div>

          <div className="essentialWrapper">
            <div className="essentialBox">
              <input
                className="essential"
                type="checkbox"
                name="isMallAgreed"
                checked={isMallAgreed}
                onChange={this.handleAgreeCheckbox}
              />
              <label>쓰나미몰 서비스 이용약관(필수)</label>
              <button onClick={this.handleAgreeBtn} name="mallToggle" />
            </div>
            {mallToggle && <Useagreement />}

            <div className="essentialBox">
              <input
                className="essential"
                type="checkbox"
                name="isTteAgreed"
                checked={isTteAgreed}
                onChange={this.handleAgreeCheckbox}
              />
              <label>쓰나르떼 서비스 이용약관(필수)</label>
              <button onClick={this.handleAgreeBtn} name="tteToggle" />
            </div>

            {tteToggle && <Useagreement2 />}
            <div className="essentialBox">
              <input
                className="essential"
                type="checkbox"
                name="isPersonaldataAgreed"
                checked={isPersonaldataAgreed}
                onChange={this.handleAgreeCheckbox}
              />
              <label>개인정보 수집/이용동의(필수)</label>
              <button onClick={this.handleAgreeBtn} name="infoToggle" />
            </div>
            {infoToggle && <Useagreement3 />}
          </div>
          <div className="buttonBox">
            <Link to="/signup">
              <button type="submit" className="goto step1">
                취소
              </button>
            </Link>
            <button
              type="submit"
              className="goto step3"
              onClick={this.handlegotostep2box}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Agree);
