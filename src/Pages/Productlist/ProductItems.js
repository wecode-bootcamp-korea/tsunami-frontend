import React, { Component } from "react";
import "./ProductItems.scss";

export default class ProductItems extends Component {
  constructor() {
    super();
  }
  render() {
    const { id, image_url, name, price, maker } = this.props;
    return (
      <ul>
        <li>
          <div className="itemList">
            <a href="#">
              <span className="thumbImg">
                <img src={image_url} />
              </span>
              <span className="info">
                <span className="txtBrand">{maker}</span>
                <span>
                  <strong className="txtTi">{name}</strong>
                </span>
                <span className="txtPrice">{price}원</span>
              </span>
            </a>
          </div>
        </li>
      </ul>
    );
  }
}
