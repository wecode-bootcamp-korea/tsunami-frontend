import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Agree from "./Step/Agree";
import SignupInfo from "./Step/SinupInfo";
import SignupDone from "./Step/SignupDone";

import "./Step.scss";

const STEP_LISTS = ["STEP1.약관동의", "STEP2.회원정보 입력", "STEP3.가입완료"];

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

    const MAPPING_OBJ = {
      1: <Agree setStep={this.setStep} />,
      2: <SignupInfo setStep={this.setStep} />,
      3: <SignupDone />,
    };
    return (
      <div>
        <Nav />
        <div className="Step">
          <h1>회원가입</h1>
          <div className="stepWrapper">
            <div className="stepBox">
              {STEP_LISTS.map((list, idx) => {
                return (
                  <>
                    <p className={step === idx + 1 && "active"}>{list}</p>
                    {idx !== 2 && (
                      <img src="/images/right-solid.svg" alt="화살표" />
                    )}
                  </>
                );
              })}
            </div>
            {MAPPING_OBJ[step]}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Step);
