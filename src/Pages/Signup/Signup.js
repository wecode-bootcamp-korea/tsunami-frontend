import React, { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        <div className="header">회원가입</div>
        <div className="stepWrapper">
          <div className="stepBox">
            <div className="step agree">STEP1.약관동의</div>
            <img src="/images/right-solid.svg" alt="화살표" />
            <div className="step info">STEP2.회원정보 입력</div>
            <img src="/images/right-solid.svg" alt="화살표" />
            <div className="step complete">STEP3.가입완료</div>
          </div>
          <div className="infoTop">
            <h3>회원기본정보</h3>
            <span>* 표시는 반드시 입력하셔야 하는 항목입니다.</span>
          </div>

          <div className="nameBox">
            <span className="name">이름 *</span>
            <input type="text" placeholder="이름 입력" className="name Input" />
          </div>
          <div className="idBox">
            <span className="id">아이디 *</span>
            <div className="inputBox">
              <input
                type="text"
                placeholder="5~16자, 영문, 숫자 또는 영문+숫자 조합"
                className="id Input"
              />
              <button type="submit" className="id btn">
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
              id="pw2"
            />
          </div>
          <div className="emailBox">
            <span className="email">이메일 *</span>
            <div className="inputBox">
              <input
                type="email"
                placeholder="이메일 입력"
                className="email Input"
              />
              <button type="submit" className="email btn">
                중복확인
              </button>
            </div>
          </div>
          <div className="cellPhoneBox">
            <span className="cellPhoneNum">휴대폰번호 *</span>
            <input
              type="number"
              placeholder="숫자만 입력(11자리)"
              className="cellPhoneNum Input"
            />
          </div>
          <div className="nonEssential">
            <div className="birthdateBox">
              <span className="birthdate">생년월일</span>
              <input
                type="number"
                placeholder="숫자만 입력(8자리)"
                className="birthdate Input"
              />
            </div>
            <div className="agreeBox">
              <span className="agree">수신동의</span>
              <div className="checkbox wrapper">
                <div className="checkboxBox">
                  <input type="checkbox" className="agree Input" />
                  <label>
                    SMS를 통한 상품 및 이벤트 정보 수신에 동의 합니다. [선택]
                  </label>
                </div>
                <div className="checkboxBox">
                  <input type="checkbox" className="agree Input" />
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
              <input type="checkbox" className="checkAge Input" />
              <label>만 14세 이상입니다.</label>
            </div>
            <p>
              * 14세 미만의 어린이는 보호자 계정의 마이페이지&gt;
              회원정보수정에서 등록할 수 있습니다.
            </p>
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
      </div>
    );
  }
}

export default Signup;
