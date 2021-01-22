import React, { Component } from "react";
import { Stationerydata } from "../Navdata/Navdata";
import Submenu from "../Components/Contents/Submenu";

export default class Stationery extends Component {
  render() {
    return (
      <div className="Stationery">
        <Submenu navData={Stationerydata} />
      </div>
    );
  }
}
