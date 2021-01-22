import React, { Component } from "react";
import { Monamipetdata } from "../Navdata/Navdata";
import Submenu from "./Contents/Submenu";

export default class Monamipet extends Component {
  render() {
    return (
      <div className="Monamipet">
        <Submenu navData={Monamipetdata} />
      </div>
    );
  }
}
