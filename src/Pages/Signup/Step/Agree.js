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
      is_all_agreed: false,
      is_mall_agreed: false,
      is_tte_agreed: false,
      is_personaldata_agreed: false,
      is_toggle1: true,
      is_toggle2: false,
      is_toggle3: false,
    };
  }

  handleAllagreeCheckbox = (e) => {
    const { checked } = e.target;
    this.setState({
      is_all_agreed: checked,
      is_mall_agreed: checked,
      is_tte_agreed: checked,
      is_personaldata_agreed: checked,
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
    const {
      is_mall_agreed,
      is_tte_agreed,
      is_personaldata_agreed,
    } = this.state;

    this.setState({
      is_all_agreed: is_mall_agreed && is_tte_agreed && is_personaldata_agreed,
    });
  };

  handleAgreeBtn1 = () => {
    this.setState({
      is_toggle1: !this.state.is_toggle1,
    });
  };

  handleAgreeBtn2 = () => {
    this.setState({
      is_toggle2: !this.state.is_toggle2,
    });
  };

  handleAgreeBtn3 = () => {
    this.setState({
      is_toggle3: !this.state.is_toggle3,
    });
  };

  handlegotostep2box = () => {
    const {
      is_mall_agreed,
      is_tte_agreed,
      is_personaldata_agreed,
    } = this.state;
    if (is_mall_agreed && is_tte_agreed && is_personaldata_agreed) {
      this.props.setStep(2);
    } else {
      alert("이용약관에 모두 동의해주세요!");
      return;
    }
  };

  render() {
    return (
      <div className="Agree">
        <div className="stepWrapper">
          <div className="allAgreeBox">
            <input
              className="agreeCheckbox"
              type="checkbox"
              name="is_all_agreed"
              checked={this.state.is_all_agreed}
              onChange={this.handleAllagreeCheckbox}
            />
            <label>쓰나미몰 통합회원 가입 약관 모두 동의</label>
          </div>

          <div className="essentialWrapper">
            <div className="essentialBox">
              <input
                className="essential"
                type="checkbox"
                name="is_mall_agreed"
                checked={this.state.is_mall_agreed}
                onChange={this.handleAgreeCheckbox}
              />
              <label>쓰나미몰 서비스 이용약관(필수)</label>
              <button onClick={this.handleAgreeBtn1} />
            </div>
            {this.state.is_toggle1 && <Useagreement />}

            <div className="essentialBox">
              <input
                className="essential"
                type="checkbox"
                name="is_tte_agreed"
                checked={this.state.is_tte_agreed}
                onChange={this.handleAgreeCheckbox}
              />
              <label>쓰나르떼 서비스 이용약관(필수)</label>
              <button onClick={this.handleAgreeBtn2} />
            </div>

            {this.state.is_toggle2 && <Useagreement2 />}
            <div className="essentialBox">
              <input
                className="essential"
                type="checkbox"
                name="is_personaldata_agreed"
                checked={this.state.is_personaldata_agreed}
                onChange={this.handleAgreeCheckbox}
              />
              <label>개인정보 수집/이용동의(필수)</label>
              <button onClick={this.handleAgreeBtn3} />
            </div>
            {this.state.is_toggle3 && <Useagreement3 />}
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
