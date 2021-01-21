import React, { Component } from "react";

import "./UnmemberDeliveryTracking.scss";

class UnmemberDeliveryTracking extends Component {
  constructor() {
    super();
    this.state = {
      orderer: "",
      order_number: "",
      phone_number: "",
      checkedOrdererBlank: false,
      checkedOrderNumBlank: false,
      checkedPhoneNumBlank: false,
    };
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOrderBtn = () => {
    const checkedOrdererBlank = this.state.orderer.length === 0;
    const checkedOrderNumBlank = this.state.order_number.length === 0;
    const checkedPhoneNumBlank = this.state.phone_number.length === 0;

    this.setState({
      checkedOrdererBlank,
      checkedOrderNumBlank,
      checkedPhoneNumBlank,
    });
    if (checkedOrdererBlank || checkedOrderNumBlank || checkedPhoneNumBlank) {
      return;
    }
    const isorderCheck = false;

    if (isorderCheck) {
      alert("환영합니다");
      this.props.history.push("/main");
    } else {
      alert("요청하신 정보가 없습니다.");
    }
  };

  render() {
    return (
      <div className="UnmemberDeliveryTracking">
        <div className="orderer Box">
          <span className="orderer">주문자명</span>
          <input
            type="text"
            placeholder="주문자명 입력"
            className="orderer input"
            name="orderer"
            onChange={this.handleInput}
          />
        </div>
        {this.state.checkedOrdererBlank && (
          <span className="info active">주문자명을 입력해주세요</span>
        )}
        <div className="ordernum Box">
          <span className="ordernum">주문번호</span>
          <input
            type="number"
            placeholder="주문번호 입력"
            className="ordernum input"
            name="order_number"
            onChange={this.handleInput}
          />
        </div>
        {!this.state.checkedOrdererBlank && this.state.checkedOrderNumBlank && (
          <span className="info active">주문번호를 입력해주세요</span>
        )}
        <div className="phoneNum Box">
          <span className="phoneNum">휴대폰번호</span>
          <input
            type="number"
            placeholder="숫자만 입력(11자리)"
            className="phoneNum input"
            name="phone_number"
            onChange={this.handleInput}
          />
        </div>
        {!this.state.checkedOrdererBlank &&
          !this.state.checkedOrderNumBlank &&
          this.state.checkedPhoneNumBlank && (
            <span className="info active">휴대폰번호를 입력해주세요</span>
          )}
        <button
          type="submit"
          className="trackingBtn"
          onClick={this.handleOrderBtn}
        >
          주문배송조회
        </button>
        <div className="infoBox">
          <span>
            * 비회원으로 주문하신 상품의 목록과 배송상태를 확인 할 수 있습니다.
          </span>
          <span>
            * 주문자명, 주문번호, 휴대폰번호로 주문내역을 확인할 수 있습니다.
          </span>
          <span>
            * 주문번호를 잊으셨다면 고객센터(1544-2884)로 문의하여 주십시오.
          </span>
        </div>
      </div>
    );
  }
}

export default UnmemberDeliveryTracking;
