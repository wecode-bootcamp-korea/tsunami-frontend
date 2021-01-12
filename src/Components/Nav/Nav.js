import React, { Component } from "react";
import "./Nav.scss";
import "../../Styles/reset.scss";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <a href="" className="allmenuBtn">
            <span className="menu-trigger">
              {/* <span></span>
              <span></span>
              <span></span> */}
              <img src="/images/align-justify.svg" alt="hamberger" />
            </span>
          </a>
          <h1 className="logo">
            <a href="">
              <img src="/images/logo.png" alt="tsunami logo" />
            </a>
          </h1>
          <nav>
            <ul>
              <li className="stationery">
                <a href="">
                  <span className="menuItem">
                    <small>문구</small>
                    Stationery
                  </span>
                </a>
                <div className="subnav">
                  <ul>
                    <li>
                      <a href="" className="mainItem">
                        <span>프리미엄 펜</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>153프리미엄</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>데스크펜/스마트펜</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>파카</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>카렌다쉬</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>카웨코</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>매뉴스크립트</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>펜/펜슬</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>볼펜</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>수성펜/사인펜</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>연필/샤프</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>형광펜</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>마카</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>네임펜/유성매직</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>생활/보드마카</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>패브릭/세라믹마카</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>컬러링/브러쉬</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>컬러링펜</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>브러쉬펜</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>미술용품</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>디자인 문구</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>몰스킨</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>다이어리/노트</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>카드/봉투</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>파우치</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>풀/스티커/테이프</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>스탬프</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>데스크용품</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>모나미 MD상품</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="monamipet">
                <a href="">
                  <span className="menuItem">
                    <small>모나미펫</small>
                    MonamiPet
                  </span>
                </a>
                <div className="subnav">
                  <ul>
                    <li>
                      <a href="" className="mainItem">
                        <span>DOG</span>
                      </a>
                      <ul>
                        <li>
                          <a href="" className="mainItem">
                            <span>사료</span>
                          </a>
                          <ul>
                            <li>
                              <a href="">
                                <span>건식사료</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>습식사료</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>퍼피</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>어덜트</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>시니어</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="" className="mainItem">
                            <span>간식</span>
                          </a>
                          <ul>
                            <li>
                              <a href="">
                                <span>동결건조간식</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>껌</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>저키/트릿</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>비스킷/소세지</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>캔/파우치</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>수제간식/영양제</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="" className="mainItem">
                            <span>용품</span>
                          </a>
                          <ul>
                            <li>
                              <a href="">
                                <span>홈리빙</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>배변</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>그루밍</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>외출</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>놀이/훈련</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>패션</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="" className="mainItem">
                            <span>프리미엄 식품관</span>
                          </a>
                          <ul>
                            <li>
                              <a href="">
                                <span>K9</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>맥아담스</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>카나간</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>헤일로</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>오리젠</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>윔지스</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>CAT</span>
                      </a>
                      <ul>
                        <li>
                          <a href="" className="mainItem">
                            <span>사료</span>
                          </a>
                          <ul>
                            <li>
                              <a href="">
                                <span>건식사료</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>습식사료</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>키튼</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>어덜트</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>시니어</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="" className="mainItem">
                            <span>간식</span>
                          </a>
                          <ul>
                            <li>
                              <a href="">
                                <span>동결건조간식</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>저키/트릿</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>비스킷/소시지</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>캔/파우치</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>수제간식/영양제</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>캣닢/캣그라스</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="" className="mainItem">
                            <span>용품</span>
                          </a>
                          <ul>
                            <li>
                              <a href="">
                                <span>홈리빙</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>배변</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>그루밍</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>외출</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>놀이/훈련</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>패션</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="" className="mainItem">
                            <span>프리미엄 식품관</span>
                          </a>
                          <ul>
                            <li>
                              <a href="">
                                <span>K9(필라인)</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>RAWZ</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>아카나</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>헤일로</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>오리젠</span>
                              </a>
                            </li>
                            <li>
                              <a href="">
                                <span>게더</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="living">
                <a href="">
                  <span className="menuItem">
                    <small>리빙&amp;라이프</small>
                    Living&amp;Life
                  </span>
                </a>
                <div className="subnav">
                  <ul>
                    <li>
                      <a href="" className="mainItem">
                        <span>가구/인테리어</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>거실가구</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>주방가구</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>수납가구</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>침실가구</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>사무실가구</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>침구류</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>홈데코</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>생활/건강</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>청소/욕실</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>마스크</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>생활마카</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>주방</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>식기류</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>보관용기</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>잔/컵</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>조리기구</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>물병/텀블러</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>주방잡화</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>드립/포트</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>디지털/가전</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>생활가전</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>주방가전</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>수납</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>박스/보관</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>소품수납</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>여행/캠핑</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>텐트</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>의자</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>매트/침대</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>테이블</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>취사용품</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>하비</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>DIY/KIT</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>아트/북</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>잉크랩</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>원데이클래스</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>모나르떼</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>모나르떼</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="storypick">
                <a href="">
                  <span className="menuItem">
                    <small>스토리픽</small>
                    Story Pick
                  </span>
                </a>
                <div className="subnav">
                  <ul>
                    <li>
                      <a href="" className="mainItem">
                        <span>Stationery</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>필기</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>취미</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>MonamiPet</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>Puppy's Diary</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>훈련</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>노하우</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>일상</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>푸드</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>Living&amp;Life</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>모나르떼</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>인테리어</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>DIY</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>Gift</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="" className="mainItem">
                        <span>Gift</span>
                      </a>
                      <ul>
                        <li>
                          <a href="">
                            <span>특별한 선물</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>교육</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>미술</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="event">
                <a href="">
                  <span className="menuItem">
                    <small>이벤트</small>
                    Event
                  </span>
                </a>
                <div className="subnav">
                  <ul>
                    <li>
                      <ul>
                        <li>
                          <a href="">
                            <span>이벤트</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>기획전</span>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <span>아울렛</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className="navIcon">
              <img src="/images/shopping-basket.svg" alt="shopping basket" />
              <img src="/images/user.svg" alt="user icon" />
              <img src="/images/search.svg" alt="search icon" />
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
