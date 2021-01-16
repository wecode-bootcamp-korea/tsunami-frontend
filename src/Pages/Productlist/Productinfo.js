import React, { Component } from "react";
import ProductItems from "./ProductItems";

export default class Productinfo extends Component {
  render() {
    const { productInfo } = this.props;
    return (
      <div className="productList">
        {productInfo.map((el) => {
          return (
            <ProductItems
              id={el.id}
              image_url={el.image_url}
              name={el.name}
              price={el.price}
              maker={el.maker}
            />
          );
        })}
      </div>
    );
  }
}
