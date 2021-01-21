import React, { Component } from "react";
import "./Buybtn.scss";

export default class Buybtn extends Component {
  render() {
    return (
      <div className="Buybtn">
        <button type="button" className="btnGray btnCart">
          장바구니 담기
        </button>
        <button type="button" className="btnBlack btnBuy">
          바로 구매하기
        </button>
        <button type="button" className="btnWhite btnWishlist">
          찜
        </button>
        <span></span>
      </div>
    );
  }
}
