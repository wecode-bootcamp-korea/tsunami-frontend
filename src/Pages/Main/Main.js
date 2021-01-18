import React, { Component } from "react";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="event">
          <span>쓰나미몰 90% 할인~</span>
        </div>
        <div className="dly">
          <div className="ment1Box">
            <div className="ment1">
              <span className="marca">마카</span>
              <span>어디까지 써봣니</span>
            </div>
            <div className="ment2">
              <div className="first">DLY</div>
              <div className="second">일상 생활</div>
            </div>
          </div>
          <div className="middle">
            <h4>나만의 감성을 DLY</h4>
            <span>다양한 곳에 마카를 이용해 DIY해보세요.</span>
            <span>내 감성을 고스란히 담은 소품을 만들 수 있을 거예요.</span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
