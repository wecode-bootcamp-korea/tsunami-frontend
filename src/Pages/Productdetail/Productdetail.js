import React, { Component } from "react";
import { PRODUCTLIST } from "../../config";
import { withRouter } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Location from "../Productdetail/Components/Location";
import Productinfo from "../Productdetail/Productinfo";
import Footer from "../../Components/Footer/Footer";
import "./Productdetail.scss";
import "./Components/Location.scss";
import "./Components/Share.scss";
import "./Productoption.scss";

class Productdetail extends Component {
  constructor() {
    super();
    this.state = {
      productDetail: [],
    };
  }

  componentDidMount = () => {
    fetch(`${PRODUCTLIST}${this.props.match.params.id}`)
      // fetch(`http://192.168.202.128:3000/data/productdetail.json`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productDetail: res.product,
        });
      });
  };

  render() {
    const { productDetail } = this.state;
    console.log(productDetail);
    return (
      <div>
        <Nav />
        <div className="Productdetail">
          <form className="productDetailForm">
            <main id="contents" className="goods detail">
              <Location />
              <div className="product">
                <div className="propic">
                  <img src={productDetail.image_url} alt="pen detail" />
                </div>
                <Productinfo productInfo={productDetail} />
              </div>
            </main>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Productdetail);
