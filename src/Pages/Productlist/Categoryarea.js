import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Categoryarea extends Component {
  render() {
    return (
      <div className="categroyArea">
        <ul className="bottomLine">
          <li className="title active">
            <Link to="/productlist">Stationery</Link>
          </li>
        </ul>
        <ul className="contentList">
          <li className="contentBox">
            <Link to="/productlist" className="listTop">
              프리미엄 펜
            </Link>
            <ul>
              <li>
                <Link to="#">153프리미엄</Link>
              </li>
              <li>
                <Link to="#">데스크펜/스마트펜</Link>
              </li>
              <li>
                <Link to="#">파카</Link>
              </li>
              <li>
                <Link to="#">카렌다쉬</Link>
              </li>
              <li>
                <Link to="#">카웨코</Link>
              </li>
              <li>
                <Link to="#">매뉴스크립트</Link>
              </li>
            </ul>
          </li>
          <li className="contentBox">
            <Link to="#" className="listTop">
              펜/펜슬
            </Link>
            <ul>
              <li>
                <Link to="#">볼펜</Link>
              </li>
              <li>
                <Link to="#">수성펜/사인펜</Link>
              </li>
              <li>
                <Link to="#">연필/샤프</Link>
              </li>
              <li>
                <Link to="#">형광펜</Link>
              </li>
            </ul>
          </li>
          <li className="contentBox">
            <Link to="#" className="listTop">
              마카
            </Link>
            <ul>
              <li>
                <Link to="#">네임펜/유성매직</Link>
              </li>
              <li>
                <Link to="#">생활/보드마카</Link>
              </li>
              <li>
                <Link to="#">패브릭/세라믹마카</Link>
              </li>
            </ul>
          </li>
          <li className="contentBox">
            <Link to="#" className="listTop">
              컬러링/브러쉬
            </Link>
            <ul>
              <li>
                <Link to="#">컬러링펜</Link>
              </li>
              <li>
                <Link to="#">브러쉬펜</Link>
              </li>
              <li>
                <Link to="#">미술용품</Link>
              </li>
            </ul>
          </li>
          <li className="contentBox">
            <Link to="#" className="listTop">
              디자인 문구
            </Link>
            <ul>
              <li>
                <Link to="#">몰스킨</Link>
              </li>
              <li>
                <Link to="#">다이어리/노트</Link>
              </li>
              <li>
                <Link to="#">카드/봉투</Link>
              </li>
              <li>
                <Link to="#">파우치</Link>
              </li>
              <li>
                <Link to="#">풀/스티커/테이프</Link>
              </li>
              <li>
                <Link to="#">스탬프</Link>
              </li>
              <li>
                <Link to="#">데스크용품</Link>
              </li>
              <li>
                <Link to="#">모나미 MD상품</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
