import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import "./Productlist.scss";
import "../../Styles/reset.scss";
import Productinfo from "./Productinfo";
import { PRODUCTLIST } from "../../config";

export default class Productlist extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
    };
  }

  componentDidMount = () => {
    const { productList } = this.state;
    fetch("http://192.168.202.128:3000/data/productlist.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productInfo: res.product,
        });
      });
  };

  render() {
    const { productInfo } = this.state;
    return (
      <div>
        <Nav />
        <main>
          <div className="inner">
            <div className="categroyArea">
              <a href="">
                <h2 className=""></h2>
              </a>
              <ul className="bottomLine">
                <li className="title active">
                  <a href="#">Stationery</a>
                </li>
              </ul>
              <ul className="contentList">
                <li className="contentBox">
                  <a href="#" className="listTop">
                    프리미엄 펜
                  </a>
                  <ul>
                    <li>
                      <a href="#">153프리미엄</a>
                    </li>
                    <li>
                      <a href="#">데스크펜/스마트펜</a>
                    </li>
                    <li>
                      <a href="#">파카</a>
                    </li>
                    <li>
                      <a href="#">카렌다쉬</a>
                    </li>
                    <li>
                      <a href="#">카웨코</a>
                    </li>
                    <li>
                      <a href="#">매뉴스크립트</a>
                    </li>
                  </ul>
                </li>
                <li className="contentBox">
                  <a href="#" className="listTop">
                    펜/펜슬
                  </a>
                  <ul>
                    <li>
                      <a href="#">볼펜</a>
                    </li>
                    <li>
                      <a href="#">수성펜/사인펜</a>
                    </li>
                    <li>
                      <a href="#">연필/샤프</a>
                    </li>
                    <li>
                      <a href="#">형광펜</a>
                    </li>
                  </ul>
                </li>
                <li className="contentBox">
                  <a href="#" className="listTop">
                    마카
                  </a>
                  <ul>
                    <li>
                      <a href="#">네임펜/유성매직</a>
                    </li>
                    <li>
                      <a href="#">생활/보드마카</a>
                    </li>
                    <li>
                      <a href="#">패브릭/세라믹마카</a>
                    </li>
                  </ul>
                </li>
                <li className="contentBox">
                  <a href="#" className="listTop">
                    컬러링/브러쉬
                  </a>
                  <ul>
                    <li>
                      <a href="#">컬러링펜</a>
                    </li>
                    <li>
                      <a href="#">브러쉬펜</a>
                    </li>
                    <li>
                      <a href="#">미술용품</a>
                    </li>
                  </ul>
                </li>
                <li className="contentBox">
                  <a href="#" className="listTop">
                    디자인 문구
                  </a>
                  <ul>
                    <li>
                      <a href="#">몰스킨</a>
                    </li>
                    <li>
                      <a href="#">다이어리/노트</a>
                    </li>
                    <li>
                      <a href="#">카드/봉투</a>
                    </li>
                    <li>
                      <a href="#">파우치</a>
                    </li>
                    <li>
                      <a href="#">풀/스티커/테이프</a>
                    </li>
                    <li>
                      <a href="#">스탬프</a>
                    </li>
                    <li>
                      <a href="#">데스크용품</a>
                    </li>
                    <li>
                      <a href="#">모나미 MD상품</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="categorySort">
              <div className="innerSort">
                <h3>문구</h3>
                <span>
                  등록상품 :<b> {productInfo.length} </b>개
                </span>
                <div className="sortArea"></div>
              </div>
            </div>
            <Productinfo productInfo={productInfo} />
          </div>
        </main>
      </div>
    );
  }
}
