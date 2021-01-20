import React, { Component } from "react";
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
      </div>
    );
  }
}

export default withRouter(Productdetail);
