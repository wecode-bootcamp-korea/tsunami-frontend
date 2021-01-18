import React, { Component } from "react";

import Header from "./Header/Header";
import MemberSignin from "./Member/MemberSignin";
import UnmemberDeliveryTracking from "./Member/UnmemberDeliveryTracking";

import "./Signin.scss";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      isMember: true,
    };
  }

  handleMember = (isMember) => {
    this.setState({
      isMember,
    });
  };

  render() {
    const { isMember } = this.state;
    return (
      <div className="Signin">
        <Header />
        <div className="memberWrapper">
          <div className="memberBox">
            <div
              className={`member ${isMember && "active"}`}
              onClick={() => this.handleMember(true)}
            >
              회원
            </div>
            <div
              className={`member ${!isMember && "active"}`}
              onClick={() => this.handleMember(false)}
            >
              비회원 (주문조회)
            </div>
          </div>
          {this.state.isMember ? (
            <MemberSignin />
          ) : (
            <UnmemberDeliveryTracking />
          )}
        </div>
      </div>
    );
  }
}

export default Signin;
