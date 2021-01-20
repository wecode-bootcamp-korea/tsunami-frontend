import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      <div>
        <Nav />
        <form className="productDetailForm">
          <main id="contents" className="goods detail">
            <div className="inner location">
              <ul>
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
          </main>
          <div></div>
          <div></div>
        </form>
      </div>
    );
  }
}

export default withRouter(Productdetail);
