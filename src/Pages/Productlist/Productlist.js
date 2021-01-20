import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Productinfo from "./Productinfo";
import { Link } from "react-router-dom";
import "./Productlist.scss";
import { PRODUCTLIST } from "../../config";
import { withRouter } from "react-router-dom";

class Productlist extends Component {
  constructor() {
    super();
    this.state = {
      productDetail: [],
      productInfo: [],
      currentId: 0,
    };
  }
  // "http://192.168.202.128:3000/data/productlist.json"
  // `${PRODUCTLIST}?category=1`
  componentDidMount = () => {
    fetch(`${PRODUCTLIST}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productInfo: res.product,
        });
      });
  };

  getId = (id) => {
    // fetch(`${PRODUCTLIST}${id}`)
      fetch(`http://192.168.202.128:3000/data/productlist.json/${id}`)
        .then((res) => res.json())
        .then((res) => {
          this.setState({ productDetail: res.product });
          console.log(this.state.productDetail);
        });
    this.props.history.push("/productdetail");
  };

  componentDidUpdate = () => {
    // this.props.history.push("")
  };

  render() {
    const { productInfo } = this.state;
    return (
      <div className="Productlist">
        <Nav />
        <main>
          <div className="inner">
            <div className="categroyArea">
              <ul className="bottomLine">
                <li className="title active">
                  <Link href="#">Stationery</Link>
                </li>
              </ul>
              <ul className="contentList">
                <li className="contentBox">
                  <Link href="#" className="listTop">
                    프리미엄 펜
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">153프리미엄</Link>
                    </li>
                    <li>
                      <Link href="#">데스크펜/스마트펜</Link>
                    </li>
                    <li>
                      <Link href="#">파카</Link>
                    </li>
                    <li>
                      <Link href="#">카렌다쉬</Link>
                    </li>
                    <li>
                      <Link href="#">카웨코</Link>
                    </li>
                    <li>
                      <Link href="#">매뉴스크립트</Link>
                    </li>
                  </ul>
                </li>
                <li className="contentBox">
                  <Link href="#" className="listTop">
                    펜/펜슬
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">볼펜</Link>
                    </li>
                    <li>
                      <Link href="#">수성펜/사인펜</Link>
                    </li>
                    <li>
                      <Link href="#">연필/샤프</Link>
                    </li>
                    <li>
                      <Link href="#">형광펜</Link>
                    </li>
                  </ul>
                </li>
                <li className="contentBox">
                  <Link href="#" className="listTop">
                    마카
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">네임펜/유성매직</Link>
                    </li>
                    <li>
                      <Link href="#">생활/보드마카</Link>
                    </li>
                    <li>
                      <Link href="#">패브릭/세라믹마카</Link>
                    </li>
                  </ul>
                </li>
                <li className="contentBox">
                  <Link href="#" className="listTop">
                    컬러링/브러쉬
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">컬러링펜</Link>
                    </li>
                    <li>
                      <Link href="#">브러쉬펜</Link>
                    </li>
                    <li>
                      <Link href="#">미술용품</Link>
                    </li>
                  </ul>
                </li>
                <li className="contentBox">
                  <Link href="#" className="listTop">
                    디자인 문구
                  </Link>
                  <ul>
                    <li>
                      <Link href="#">몰스킨</Link>
                    </li>
                    <li>
                      <Link href="#">다이어리/노트</Link>
                    </li>
                    <li>
                      <Link href="#">카드/봉투</Link>
                    </li>
                    <li>
                      <Link href="#">파우치</Link>
                    </li>
                    <li>
                      <Link href="#">풀/스티커/테이프</Link>
                    </li>
                    <li>
                      <Link href="#">스탬프</Link>
                    </li>
                    <li>
                      <Link href="#">데스크용품</Link>
                    </li>
                    <li>
                      <Link href="#">모나미 MD상품</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="categorySort">
              <div className="innerSort">
                <h3>프리미엄 펜</h3>
                <span>
                  등록상품 :<b> {productInfo.length} </b>개
                </span>
              </div>
            </div>
            <div className="sortArea">
              <Productinfo
                productInfo={productInfo}
                getId={this.getId}
                // onClick={this.componentDidUpdate}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Productlist);
