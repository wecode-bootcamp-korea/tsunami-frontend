import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Productdetail.scss";
import { PRODUCTLIST } from "../../config";
import { withRouter } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

class Productdetail extends Component {
  constructor() {
    super();
    this.state = {
      productDetail: [],
    };
  }
  componentDidMount = () => {
    fetch(`${PRODUCTLIST}${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productDetail: res.product,
        });
      });
  };
  render() {
    return (
      <div className="Productdetail">
        <Nav />
        <form className="productDetailForm">
          <main id="contents" className="goods detail">
            <div className="inner location">
              <ul className="moveBox">
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">Stationery</Link>
                </li>
                <li>
                  <Link to="#">
                    <select id="catelocation2">
                      <option value="565">프리미엄 펜</option>
                      <option value="566">펜/펜슬</option>
                      <option value="567">마카</option>
                      <option value="568">컬러링/브러쉬</option>
                      <option value="569">디자인 문구</option>
                    </select>
                  </Link>
                </li>
                <li>
                  <select id="cateLocation3">
                    <option value="625">파카</option>
                    <option value="570">153프리미엄</option>
                    <option value="572">데스크펜/스마트펜</option>
                    <option value="626">카렌다쉬</option>
                    <option value="627">카웨코</option>
                    <option value="629">매뉴스크립트</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="inner product">
              <div className="propic">
                <img
                  src="https://cms.cloudinary.vpsvc.com//image/fetch/q_auto:eco,w_700,f_auto,dpr_auto/https://s3-eu-west-1.amazonaws.com/sitecore-media-bucket/prod%2fen%2f%7b3D1BD3F1-6E86-40F6-9377-23044E5B9A42%7d"
                  alt="pen detail"
                />
              </div>
              <div className="proinfo">
                <ul className="share">
                  <li className="facebookBtn">
                    <a href="#">
                      <img
                        src="https://user-images.githubusercontent.com/40714505/105027767-81d75f80-5a93-11eb-867f-3b68aa28001e.png"
                        alt="facebook"
                      />
                    </a>
                  </li>
                  <li className="kakaostoryBtn">
                    <a href="#">
                      <img
                        src="https://user-images.githubusercontent.com/40714505/105029016-227a4f00-5a95-11eb-940b-cd6ec3534685.png"
                        alt="kakao story"
                      />
                    </a>
                  </li>
                  <li className="urlBtn">
                    <a href="#">
                      <img
                        src="https://user-images.githubusercontent.com/40714505/105029340-94eb2f00-5a95-11eb-98f2-643bb6d6e06c.png"
                        alt="url"
                      />
                    </a>
                  </li>
                </ul>
                <h2>
                  <Link to="#" className="mainLink">
                    <span>Tsunami / 쓰나미</span>
                  </Link>
                  <strong>153 블라썸</strong>
                </h2>
                <span className="bottomLine"></span>
                <span className="pinfoTxt">
                  <table>
                    <caption>상품주요정보</caption>
                    <colgroup>
                      <col></col>
                      <col></col>
                    </colgroup>
                    <tbody className="pinfoTxt">
                      <tr className="infoColor">
                        <th>바디컬러</th>
                        <td>
                          <ul>
                            <li>
                              <img src="" alt="" />
                              <span>비올라</span>
                            </li>
                            <li>
                              <img src="" alt="" />
                              <span>피오니</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="infoColor">
                        <th>잉크컬러</th>
                        <td>
                          <ul>
                            <li>
                              <img src="" alt="" />
                              <span>블랙</span>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="infoWeight">
                        <th>심두께및스펙</th>
                        <td>
                          <ul>
                            <li>
                              <img src="" alt="" className="loading" />
                              0.7mm
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <th>특징</th>
                        <td>무광 메탈 소재, 고급리필심(FX-4000) 장착</td>
                      </tr>
                      <tr className="infoSpec">
                        <th>주요특징</th>
                        <td>
                          <span>프리미엄펜</span>
                          <span>153시리즈</span>
                          <span>각인서비스</span>
                          <span>부드러운필기감</span>
                        </td>
                      </tr>
                    </tbody>
                    <tbody className="pinfoPrice">
                      <tr>
                        <th>판매가</th>
                        <td>
                          <span className="txtPrice">
                            <em>20,000</em>원
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <th>회원혜택</th>
                        <td>
                          회원등급별 포인트 적립 및 즉시할인
                          <button type="button" className="btnWhite small">
                            회원별 혜택 +
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th>카드혜택</th>
                        <td>
                          카드 무이자 할부 혜택
                          <button type="button" className="btn-white small">
                            카드사 혜택 +
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </span>
              </div>
              {/* <fieldset>
                <legend className="hide">상품옵션선택</legend>
                <div className="proSelect">
                  <ul>
                    <li>
                      <div className="dorpdown">
                        <span className="current">선택해주세요</span>
                        <div className="list">
                          <ul>
                            <li className="option">선택해주세요</li>
                            <li className="option">비올라(Vioia)</li>
                            <li className="option">피오니(Pioney)</li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </fieldset> */}
            </div>
            <div className="inner pdetail"></div>
            <div className="bottombuybtn"></div>
          </main>
        </form>
      </div>
    );
  }
}

export default withRouter(Productdetail);
