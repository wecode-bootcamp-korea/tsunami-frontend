import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Location extends Component {
  render() {
    return (
      <div>
        <div className="location">
          <ul className="moveBox">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">Stationery</Link>
            </li>
            <li>
              <Link to="#">
                <select id="catelocation2">
                  <option value="565">프리미엄 펜</option>
                  <option value="566">펜/펜슬</option>
                  <option value="567">마카</option>
                  <option value="568">컬러링/브러쉬</option>
                  <option value="569">디자인 문구</option>
                </select>
              </Link>
            </li>
            <li>
              <select id="cateLocation3">
                <option value="625">파카</option>
                <option value="570" selected>
                  153프리미엄
                </option>
                <option value="572">데스크펜/스마트펜</option>
                <option value="626">카렌다쉬</option>
                <option value="627">카웨코</option>
                <option value="629">매뉴스크립트</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
