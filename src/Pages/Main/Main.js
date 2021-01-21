import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      BestSeller: [],
    };
  }

  componentDidMount() {
    fetch("/data/product.json")
      .then((response) => response.json())
      .then((result) => this.setState({ BestSeller: result.product }));
  }

  render() {
    console.log(this.state.BestSeller);
    const { BestSeller } = this.state;
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
          <div className="middle">
            <h3>나만의 감성을 DIY</h3>
            <span>다양한 곳에 마카를 이용해 DIY해보세요.</span>
            <span>내 감성을 고스란히 담은 소품을 만들 수 있을 거예요.</span>
          </div>
          <div className="recommendWrapper">
            <p>Best Seller</p>
            {BestSeller &&
              BestSeller.map((product) => {
                return (
                  <div className="recommendBox">
                    <img src={product.imageUrl} alt="예제" />
                    <p>{product.name}</p>
                    <span>{product.price}</span>
                  </div>
                );
              })}

            <div className="recommendBox">
              <Link to="/productlist">
                <img src="images/plus.png" alt="plus" className="plus" />
              </Link>
              <span>더보기</span>
            </div>
          </div>
        </section>
        <section className="Tstory">
          <h2>tsunami Story</h2>
          <div className="customerComments">
            <div className="storyBox">
              <img src="/images/cus.jpeg" alt="cus" />
              <div>
                <h3>T storyteller</h3>
                <p>name: 홍연우</p>
                <span>후기: 이마에 붙이고 다니기 좋아요!</span>
              </div>
            </div>
            <div className="storyBox">
              <img src="/images/cus1.jpeg" alt="cus1" />
              <div>
                <h3>T storyteller</h3>
                <p>name: 김건희</p>
                <span>후기: 알고리즘이 잘풀려요!</span>
              </div>
            </div>
            <div className="storyBox">
              <img src="/images/cus4.jpeg" alt="cus4" />
              <div>
                <h3>T storyteller</h3>
                <p>name: 정재윤</p>
                <span>후기: 생각한다 고로 나는 존재한다</span>
              </div>
            </div>
            <div className="storyBox">
              <img src="/images/cus3.jpeg" alt="cus3" />
              <div>
                <h3>T storyteller</h3>
                <p>name: 장준영</p>
                <span>후기: 쓰나미펜은 귀여워요!</span>
              </div>
            </div>
            <div className="storyBox">
              <img src="/images/cus2.jpeg" alt="cus2" />
              <div>
                <h3>T storyteller</h3>
                <p>name: 김준형</p>
                <span>후기: 볼펜중에 최고!</span>
              </div>
            </div>
            <div className="storyBox">
              <img src="/images/cus5.jpeg" alt="cus5" />
              <div>
                <h3>T storyteller</h3>
                <p>name: 김승완</p>
                <span>후기: 10년동안 애용한 쓰나미!</span>
              </div>
            </div>
            <div className="storyBox">
              <img src="/images/cus6.jpeg" alt="cus6" />
              <div>
                <h3>T storyteller</h3>
                <p>name: 태성현</p>
                <span>후기: 볼펜이 작은것이 아닙니다</span>
              </div>
            </div>
            <div className="storyBox">
              <img src="/images/cus7.jpeg" alt="cus7" />
              <div>
                <h3>T storyteller</h3>
                <p>name: 황인태</p>
                <span>후기: 나만의 요술봉!</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
