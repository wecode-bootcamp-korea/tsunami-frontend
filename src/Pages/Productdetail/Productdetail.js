import React, { Component } from "react";
import { PRODUCTLIST } from "../../config";

export default class Productdetail extends Component {
  componentDidMount = () => {
    fetch(`${PRODUCTLIST}`);
  };
  render() {
    return <div></div>;
  }
}
