import React, { Component } from "react";
import { Eventdata } from "../Navdata/Navdata";
import Contents from "./Contents/Contents";

export default class Event extends Component {
  render() {
    return (
      <div className="Event">
        <ul className="subnavBox">
          <div className="eventMenu">
            {Eventdata.map((menu) => {
              return <Contents contents={menu.content} />;
            })}
          </div>
        </ul>
      </div>
    );
  }
}
