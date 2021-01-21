import React, { Component } from "react";

import { Link } from "react-router-dom";

import { SERVER_JY } from "../../config";

import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      bestSeller: [],
      tsunamiStory: [],
    };
  }

  componentDidMount() {
    fetch(SERVER_JY)
      .then((response) => response.json())
      .then((result) => this.setState({ bestSeller: result.product }));
    fetch("/data/product.json")
      .then((response) => response.json())
      .then((result) => this.setState({ tsunamiStory: result.story }));
  }

  render() {
    const { bestSeller } = this.state;
    const { tsunamiStory } = this.state;
    return (
      <div className="Main">
        <section className="event">
          <div className="eventComent">
            <p>마법처럼 사랑을 전하는</p>
            <p>tsunami pen</p>
          </div>
          <img src="/images/back1.jpeg" alt="background"></img>
        </section>
        <section className="dly">
          <div className="ment1Box">
            <div className="ment1">
              <span className="marca">Pen</span>
              <span>어디까지 써봤니</span>
            </div>
          </div>
          <div className="ment2">
            <h3>나만의 감성을 DIY</h3>
            <span>다양한 곳에 마카를 이용해 DIY해보세요.</span>
            <span>내 감성을 고스란히 담은 소품을 만들 수 있을 거예요.</span>
          </div>
          <div className="recommendWrapper">
            <p>Best Seller</p>
            {bestSeller &&
              bestSeller.map((product) => {
                return (
                  <div className="recommendBox" key={product.id}>
                    <img src={product.imageUrl} alt="예제" />
                    <p>{product.name}</p>
                    <span>{product.price}원</span>
                  </div>
                );
              })}

            <div className="recommendBox">
              <Link to="/productlist">
                <img src="images/plus.png" alt="plus" className="plus" />
              </Link>
              <label>더보기</label>
            </div>
          </div>
        </section>
        <section className="Tstory">
          <h2>tsunami Story</h2>
          <div className="customerComments">
            {tsunamiStory &&
              tsunamiStory.map((story) => {
                return (
                  <div className="storyBox" key={story.id}>
                    <img src={story.imageSrc} alt="cus" />
                    <div>
                      <h3>T storyteller</h3>
                      <p>name: {story.name}</p>
                      <span>review: {story.ProductReview}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
