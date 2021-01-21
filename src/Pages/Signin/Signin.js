import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

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
        <Nav />
        <p className="header">로그인</p>
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
        <Footer />
      </div>
    );
  }
}

export default Signin;
