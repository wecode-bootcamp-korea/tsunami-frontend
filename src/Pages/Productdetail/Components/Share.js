import React, { Component } from "react";

export default class Share extends Component {
  render() {
    return (
      <ul className="Share">
        <li className="facebookBtn">
          <a href="#">
            <img
              src="https://user-images.githubusercontent.com/40714505/105027767-81d75f80-5a93-11eb-867f-3b68aa28001e.png"
              alt="facebook"
            />
          </a>
        </li>
        <li className="kakaostoryBtn">
          <a href="#">
            <img
              src="https://user-images.githubusercontent.com/40714505/105029016-227a4f00-5a95-11eb-940b-cd6ec3534685.png"
              alt="kakao story"
            />
          </a>
        </li>
        <li className="urlBtn">
          <a href="#">
            <img
              src="https://user-images.githubusercontent.com/40714505/105029340-94eb2f00-5a95-11eb-98f2-643bb6d6e06c.png"
              alt="url"
            />
          </a>
        </li>
      </ul>
    );
  }
}
