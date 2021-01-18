import React, { Component } from "react";
import ProductItems from "./ProductItems";

export default class Productinfo extends Component {
  render() {
    const { productInfo } = this.props;
    return (
      <div className="productInfo">
        {productInfo.map((product) => {
          return (
            <ProductItems
              id={product.id}
              image_url={product.image_url}
              name={product.name}
              price={product.price}
              maker={product.maker}
            />
          );
        })}
      </div>
    );
  }
}
