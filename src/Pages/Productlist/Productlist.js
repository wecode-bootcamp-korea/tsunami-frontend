import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav";
import Productinfo from "./Productinfo";
import Buttons from "./Components/Buttons";
import Categoryarea from "./Categoryarea";
import { PRODUCTLIST } from "../../config";
import { withRouter } from "react-router-dom";
import "./Productlist.scss";

const LIMIT = 40;

class Productlist extends Component {
  constructor() {
    super();
    this.state = {
      productInfo: [],
      currentIdx: 1,
      count: 0,
    };
  }
  componentDidMount = () => {
    fetch(`${PRODUCTLIST}?limit=${LIMIT}`)
      // fetch("http://192.168.202.128:3000/data/productlist.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productInfo: res.product,
          count: res.count,
        });
      });
  };

  getId = (id) => {
    this.props.history.push(`/productdetail/${id}`);
  };

  fetchPen = (e) => {
    const offset = e?.target.dataset.idx;

    fetch(
      `${PRODUCTLIST}?limit=${LIMIT * offset}&offset=${(offset - 1) * LIMIT}`
    )
      // fetch("http://192.168.202.128:3000/data/productlist.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productInfo: res.product,
        });
      });
  };

  render() {
    const { productInfo, currentIdx, count } = this.state;
    const { fetchPen, getId } = this;
    return (
      <div className="Productlist">
        <Nav />
        <main className="pMain">
          <div className="inner">
            <Categoryarea />
            <div className="categorySort">
              <div className="innerSort">
                <h3>프리미엄 펜</h3>
                <span>
                  등록상품 :<b> {count} </b>개
                </span>
              </div>
            </div>
            <div className="sortArea">
              <Productinfo productInfo={productInfo} getId={getId} />
              <Buttons currentIdx={currentIdx} fetchPen={fetchPen} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(Productlist);
