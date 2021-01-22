import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { SIGNUP_API } from "../../../config";
import { DUPLICATION_USERNAME_API } from "../../../config";
import { DUPLICATION_EMAIL_API } from "../../../config";

import "./SinupInfo.scss";

class SinupInfo extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      password: "",
      checkPassword: "",
      email: "",
      phoneNumber: "",
      birthday: "",
      isSmsAgreed: false,
      isEmailAgreed: false,
      isOver14: false,
      isValidUsername: false,
      isValidEmail: false,
    };
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleInputCheckbox = (e) => {
    const { name, checked } = e.target;

    this.setState({
      [name]: checked,
    });
  };

  handleSendBtn = () => {
    const {
      name,
      username,
      password,
      checkPassword,
      email,
      phoneNumber,
      isValidUsername,
      isValidEmail,
      birthday,
      isSmsAgreed,
      isEmailAgreed,
    } = this.state;
    if (
      name.length <= 0 ||
      username.length <= 0 ||
      password.length <= 0 ||
      email.length <= 0 ||
      phoneNumber.length <= 0
    ) {
      alert("* 필수값을 입력하세요!");
      return;
    }
    if (password !== checkPassword) return alert("비밀번호가 같지 않아요!");
    if (!(isValidUsername && isValidEmail)) {
      return alert("중복확인을 실행하시키세요!");
    }
    if (this.checkvalidPw()) return alert("비밀번호를 확인하세요");
    if (!this.state.isOver14) return alert("14세 이상만 가입가능합니다.");

    fetch(SIGNUP_API, {
      method: "POST",
      body: JSON.stringify({
        name,
        username,
        password,
        email,
        phoneNumber,
        birthday,
        isSmsAgreed,
        isEmailAgreed,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.MESSAGE === "USER_CREATED") {
          alert("회원가입이 완료 되었습니다!");
          this.props.setStep(3);
        }
      });
  };

  handleDuplicateId = () => {
    const username = this.state.username;
    const idFilter = /[^a-z|A-Z|0-9]/;
    if (
      idFilter.test(username) ||
      username.length < 5 ||
      username.length > 17
    ) {
      alert("아이디를 확인하세요");
      return;
    }
    fetch(`${DUPLICATION_USERNAME_API}${username}`)
      .then((response) => response.json())
      .then((result) => {
        if (result.DUPLICATION) {
          alert("이미 사용중인 아이디입니다!");
        } else {
          this.setState({
            isValidUsername: true,
          });
          alert("사용 가능한 아이디입니다!");
        }
      });
  };

  handleDuplicateEmail = () => {
    const emailFilter = /@/g;
    const email = this.state.email;
    if (!emailFilter.test(email)) {
      alert("이메일형식으로 작성해주세요!");
    }
    fetch(`${DUPLICATION_EMAIL_API}${email}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.DUPLICATION) {
          return alert("이미 사용중인 이메일입니다!");
        } else {
          this.setState({
            isValidEmail: true,
          });
          return alert("사용 가능한 이메일입니다!");
        }
      });
  };

  checkvalidPw = () => {
    const password = this.state.password;
    const pwFilterEng = password.search(/[a-zA-Z]/);
    const pwFilterNum = password.search(/[0-9]/);
    const pwFilterSpecial = password.search(/[!@#$%^?_~]/);

    return (
      (pwFilterEng < 0 && pwFilterNum < 0) ||
      (pwFilterNum < 0 && pwFilterSpecial < 0) ||
      (pwFilterEng < 0 && pwFilterSpecial < 0) ||
      password.length < 6 ||
      password.length > 17 ||
      password === this.state.username
    );
  };

  handlecheckAge = (e) => {
    this.setState({
      isOver14: e.target.checked,
    });
  };

  render() {
    return (
      <div className="SinupInfo">
        <div className="stepWrapper">
          <div className="infoTop">
            <h3>회원기본정보</h3>
            <span>* 표시는 반드시 입력하셔야 하는 항목입니다.</span>
          </div>

          <div className="nameBox">
            <span className="name">이름 *</span>
            <input
              type="text"
              placeholder="이름 입력"
              className="name Input"
              name="name"
              onChange={this.handleInput}
            />
          </div>
          <div className="idBox">
            <span className="id">아이디 *</span>
            <div className="inputBox">
              <input
                type="text"
                placeholder="5~16자, 영문, 숫자 또는 영문+숫자 조합"
                className="id Input"
                name="username"
                onChange={this.handleInput}
              />
              <button
                type="submit"
                className="id btn"
                onClick={this.handleDuplicateId}
              >
                중복확인
              </button>
            </div>
          </div>
          <div className="pwBox">
            <span className="pw">비밀번호 *</span>
            <input
              type="password"
              placeholder="영문/숫자/특수문자 중 2가지 조합, 6~16자 이내"
              className="pw Input"
              id="pw"
              name="password"
              onChange={this.handleInput}
            />
          </div>
          <div className="pwGuide">
            <span>
              * 6~16자 이내, 영문 대/소문자,숫자,특수문자 중 2가지 조합으로
              사용해주세요.
            </span>
            <span>&nbsp;&nbsp;가능 특수문자:!@#$%^?_~</span>
            <span>* 아이디와 동일한 비밀번호는 사용할 수 없습니다.</span>
          </div>
          <div className="pwBox">
            <span className="pw">비밀번호확인 *</span>
            <input
              type="password"
              placeholder="비밀번호 재입력"
              className="pw Input"
              name="checkPassword"
              onChange={this.handleInput}
            />
          </div>
          <div className="emailBox">
            <span className="email">이메일 *</span>
            <div className="inputBox">
              <input
                type="email"
                placeholder="이메일 입력"
                className="email Input"
                name="email"
                onChange={this.handleInput}
              />
              <button
                type="submit"
                className="email btn"
                onClick={this.handleDuplicateEmail}
              >
                중복확인
              </button>
            </div>
          </div>
          <div className="PhoneBox">
            <span className="PhoneNum">휴대폰번호 *</span>
            <input
              type="number"
              placeholder="숫자만 입력(11자리)"
              className="PhoneNum Input"
              name="phoneNumber"
              onChange={this.handleInput}
            />
          </div>
          <div className="nonEssential">
            <div className="birthdateBox">
              <span className="birthdate">생년월일</span>
              <input
                type="number"
                placeholder="숫자만 입력(8자리)"
                className="birthdate Input"
                name="birthday"
                onChange={this.handleInput}
              />
            </div>
            <div className="agreeBox">
              <span className="agree">수신동의</span>
              <div className="checkbox wrapper">
                <div className="checkboxBox">
                  <input
                    type="checkbox"
                    className="agree Input"
                    name="isSmsAgreed"
                    onChange={this.handleInputCheckbox}
                  />
                  <label>
                    SMS를 통한 상품 및 이벤트 정보 수신에 동의 합니다. [선택]
                  </label>
                </div>
                <div className="checkboxBox">
                  <input
                    type="checkbox"
                    className="agree Input"
                    name="isEmailAgreed"
                    onChange={this.handleInputCheckbox}
                  />
                  <label>
                    이메일을 통한 상품 및 이벤트 정보 수신에 동의 합니다. [선택]
                  </label>
                </div>
                <p>
                  * SMS 및 이메일 수신동의와 무관하게 주문결제/회원 관련 안내
                  메일/문자는 발송되며 수신미동의 시 쇼핑몰 이용에 제약은
                  없습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="gotoWrapper">
            <div className="checkAge">
              <input
                type="checkbox"
                className="checkAge input"
                onChange={this.handlecheckAge}
              />
              <label>만 14세 이상입니다.</label>
            </div>
            <p>
              * 14세 미만의 어린이는 보호자 계정의 마이페이지&gt;
              회원정보수정에서 등록할 수 있습니다.
            </p>
            <div className="buttonBox">
              <Link to="/signup">
                <button type="submit" className="goto step1">
                  취소
                </button>
              </Link>
              <button
                type="submit"
                className="goto step3"
                onClick={this.handleSendBtn}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SinupInfo);
