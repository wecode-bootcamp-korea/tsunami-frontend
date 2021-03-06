import React, { Component } from "react";
import ProductItems from "./ProductItems";

export default class Productinfo extends Component {
  setId = (id) => {
    this.props.getId(id);
  };

  render() {
    const { productInfo } = this.props;
    return (
      <div className="Productinfo">
        {productInfo.map((product) => {
          return (
            <ProductItems
              id={product.id}
              image_url={product.image_url}
              name={product.name}
              price={product.price}
              maker={product.maker}
              setId={this.setId}
            />
          );
        })}
      </div>
    );
  }
}
