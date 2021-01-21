import React, { Component } from "react";
import { Livingdata } from "../Navdata/Navdata";
import Submenu from "./Contents/Submenu";

export default class Living extends Component {
  render() {
    return (
      <div className="Living">
        <Submenu navData={Livingdata} />
      </div>
    );
  }
}
