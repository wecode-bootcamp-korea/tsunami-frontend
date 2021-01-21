import React, { Component } from "react";
import Share from "../Productdetail/Components/Share";
import Bodycolor from "./Bodycolor";
import Inkcolor from "./Inkcolor";
import Weight from "../Productdetail/Weight";
import Keywords from "./Keywords";
import Productoption from "./Productoption";
import Buybtn from "./Buybtn";
import { Link } from "react-router-dom";
import "./Productinfo.scss";

export default class Productinfo extends Component {
  render() {
    const { productInfo } = this.props;
    return (
      <div className="proinfo">
        <Share />
        <h2>
          <Link to="#" className="mainLink">
            <span>{productInfo.maker}</span>
          </Link>
          <strong>{productInfo.name}</strong>
        </h2>
        <span className="bottomLine"></span>
        <span className="pinfoTxt">
          <table className="infoTable">
            <caption>상품주요정보</caption>
            <tbody>
              <tr className="infoColor">
                <th>바디컬러</th>
                <Bodycolor bodyColor={productInfo.body_colors} />
              </tr>
              <tr className="infoColor">
                <th>잉크컬러</th>
                <Inkcolor inkColor={productInfo.ink_colors} />
              </tr>
              <tr className="infoWeight">
                <th>심두께및스펙</th>
                <Weight weight={productInfo.thicknesses} />
              </tr>
              <tr>
                <th>특징</th>
                <td>{productInfo.feature}</td>
              </tr>
              <tr className="infoSpec">
                <th>주요특징</th>
                <Keywords keywords={productInfo.keywords} />
              </tr>
            </tbody>
            <tbody className="pinfoPrice">
              <tr>
                <th>판매가</th>
                <td>
                  <span className="txtPrice">
                    <strong>{productInfo.price}</strong>
                    <small>원</small>
                  </span>
                </td>
              </tr>
              <tr>
                <th>회원혜택</th>
                <td className="benefitBtn">
                  회원등급별 포인트 적립 및 즉시할인
                  <button type="button" className="btnWhite small">
                    회원별 혜택 +
                  </button>
                </td>
              </tr>
              <tr>
                <th>카드혜택</th>
                <td className="benefitBtn">
                  카드 무이자 할부 혜택
                  <button type="button" className="btnWhite small">
                    카드사 혜택 +
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </span>
        <table className="optTable">
          <tbody>
            <tr>
              <th>컬러</th>
              <Productoption options={productInfo.options} />
            </tr>
          </tbody>
        </table>
        <Buybtn />
      </div>
    );
  }
}
