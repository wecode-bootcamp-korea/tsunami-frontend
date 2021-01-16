import React, { Component } from "react";
import Stationery from "./Components/Stationery";
import MonamiPet from "./Components/Monamipet";
import Living from "./Components/Living";
import Storypick from "./Components/Storypick";
import Event from "./Components/Event";

export default class Navinfo extends Component {
  render() {
    return (
      <ul>
        <Stationery />
        <MonamiPet />
        <Living />
        <Storypick />
        <Event />
      </ul>
    );
  }
}
