import React, { Component } from "react";
import { Storypickdata } from "../Navdata/Navdata";
import Submenu from "../Components/Contents/Submenu";

export default class Storypick extends Component {
  render() {
    return (
      <div className="Storypick">
        <Submenu navData={Storypickdata} />
      </div>
    );
  }
}
