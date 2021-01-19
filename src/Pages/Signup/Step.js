import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Agree from "./Step/Agree";
import SignupInfo from "./Step/SinupInfo";
import SignupDone from "./Step/SignupDone";

import "./Step.scss";

class Step extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
    };
  }

  setStep = (step) => {
    this.setState({
      step,
    });
  };

  render() {
    const { step } = this.state;
    return (
      <div className="Step">
        <header>회원가입</header>
        <div className="stepWrapper">
          <div className="stepBox">
            <p className={step === 1 && "active"}>STEP1.약관동의</p>
            <img src="/images/right-solid.svg" alt="화살표" />
            <p className={step === 2 && "active"}>STEP2.회원정보 입력</p>
            <img src="/images/right-solid.svg" alt="화살표" />
            <p className={step === 3 && "active"}>STEP3.가입완료</p>
          </div>
          {step === 1 && <Agree setStep={this.setStep} />}
          {step === 2 && <SignupInfo setStep={this.setStep} />}
          {step === 3 && <SignupDone />}
        </div>
      </div>
    );
  }
}

export default withRouter(Step);
