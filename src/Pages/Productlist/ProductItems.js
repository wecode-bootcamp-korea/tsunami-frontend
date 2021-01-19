import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductItems extends Component {
  getId = (id) => {
    this.props.setId(id);
  };
  render() {
    const { id, image_url, name, price, maker } = this.props;
    return (
      <div className="ProductItems">
        <ul>
          <li>
            <div className="itemList">
              <Link href="#" onClick={() => this.getId(id)}>
                <span className="thumbImg">
                  <img src={image_url} alt="제품이미지" />
                </span>
                <span className="info">
                  <span className="txtBrand">{maker}</span>
                  <span>
                    <strong className="txtTi">{name}</strong>
                  </span>
                  <span className="txtPrice">{price}원</span>
                </span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
