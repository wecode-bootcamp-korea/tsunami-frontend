import React, { Component } from "react";
import { Giftdata } from "../Navdata/Navdata";
import Submenu from "./Contents/Submenu";

export default class Gift extends Component {
  render() {
    return (
      <div className="Gift">
        <Submenu navData={Giftdata} />
      </div>
    );
  }
}
