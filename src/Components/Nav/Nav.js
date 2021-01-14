import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to="#" className="allmenuBtn">
              <span className="menu-trigger">
                <img src="/images/align-justify.svg" alt="hamberger" />
              </span>
            </Link>
            <h1 className="logo">
              <Link to="#">
                <img src="/images/logo.png" alt="tsunami logo" />
              </Link>
            </h1>
            <ul>
              <li className="stationery">
                <Link to="#">
                  <span className="menuItem">
                    <small>문구</small>
                    Stationery
                  </span>
                </Link>
                <div className="subnav">
                  <ul>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>프리미엄 펜</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>153프리미엄</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>데스크펜/스마트펜</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>파카</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>카렌다쉬</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>카웨코</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>매뉴스크립트</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>펜/펜슬</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>볼펜</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>수성펜/사인펜</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>연필/샤프</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>형광펜</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>마카</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>네임펜/유성매직</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>생활/보드마카</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>패브릭/세라믹마카</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>컬러링/브러쉬</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>컬러링펜</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>브러쉬펜</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>미술용품</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>디자인 문구</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>몰스킨</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>다이어리/노트</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>카드/봉투</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>파우치</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>풀/스티커/테이프</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>스탬프</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>데스크용품</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>모나미 MD상품</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="monamipet">
                <Link to="#">
                  <span className="menuItem">
                    <small>모나미펫</small>
                    MonamiPet
                  </span>
                </Link>
                <div className="subnav">
                  <ul>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>DOG</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#" className="mainItem">
                            <span>사료</span>
                          </Link>
                          <ul>
                            <li>
                              <Link to="#">
                                <span>건식사료</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>습식사료</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>퍼피</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>어덜트</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>시니어</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" className="mainItem">
                            <span>간식</span>
                          </Link>
                          <ul>
                            <li>
                              <Link to="#">
                                <span>동결건조간식</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>껌</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>저키/트릿</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>비스킷/소세지</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>캔/파우치</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>수제간식/영양제</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" className="mainItem">
                            <span>용품</span>
                          </Link>
                          <ul>
                            <li>
                              <Link to="#">
                                <span>홈리빙</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>배변</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>그루밍</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>외출</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>놀이/훈련</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>패션</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" className="mainItem">
                            <span>프리미엄 식품관</span>
                          </Link>
                          <ul>
                            <li>
                              <Link to="#">
                                <span>K9</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>맥아담스</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>카나간</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>헤일로</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>오리젠</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>윔지스</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>CAT</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#" className="mainItem">
                            <span>사료</span>
                          </Link>
                          <ul>
                            <li>
                              <Link to="#">
                                <span>건식사료</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>습식사료</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>키튼</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>어덜트</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>시니어</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" className="mainItem">
                            <span>간식</span>
                          </Link>
                          <ul>
                            <li>
                              <Link to="#">
                                <span>동결건조간식</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>저키/트릿</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>비스킷/소시지</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>캔/파우치</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>수제간식/영양제</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>캣닢/캣그라스</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" className="mainItem">
                            <span>용품</span>
                          </Link>
                          <ul>
                            <li>
                              <Link to="#">
                                <span>홈리빙</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>배변</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>그루밍</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>외출</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>놀이/훈련</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>패션</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#" className="mainItem">
                            <span>프리미엄 식품관</span>
                          </Link>
                          <ul>
                            <li>
                              <Link to="#">
                                <span>K9(필라인)</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>RAWZ</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>아카나</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>헤일로</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>오리젠</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <span>게더</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="living">
                <Link to="#">
                  <span className="menuItem">
                    <small>리빙&amp;라이프</small>
                    Living&amp;Life
                  </span>
                </Link>
                <div className="subnav">
                  <ul>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>가구/인테리어</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>거실가구</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>주방가구</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>수납가구</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>침실가구</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>사무실가구</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>침구류</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>홈데코</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>생활/건강</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>청소/욕실</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>마스크</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>생활마카</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>주방</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>식기류</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>보관용기</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>잔/컵</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>조리기구</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>물병/텀블러</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>주방잡화</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>드립/포트</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>디지털/가전</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>생활가전</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>주방가전</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>수납</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>박스/보관</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>소품수납</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>여행/캠핑</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>텐트</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>의자</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>매트/침대</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>테이블</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>취사용품</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>하비</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>DIY/KIT</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>아트/북</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>잉크랩</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>원데이클래스</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>모나르떼</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>모나르떼</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="storypick">
                <Link to="#">
                  <span className="menuItem">
                    <small>스토리픽</small>
                    Story Pick
                  </span>
                </Link>
                <div className="subnav">
                  <ul>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>Stationery</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>필기</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>취미</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>MonamiPet</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>Puppy's Diary</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>훈련</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>노하우</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>일상</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>푸드</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>Living&amp;Life</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>모나르떼</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>인테리어</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>DIY</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>Gift</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#" className="mainItem">
                        <span>Gift</span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>특별한 선물</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>교육</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>미술</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="event">
                <Link to="#">
                  <span className="menuItem">
                    <small>이벤트</small>
                    Event
                  </span>
                </Link>
                <div className="subnav">
                  <ul>
                    <li>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>이벤트</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>기획전</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <span>아울렛</span>
                          </Link>
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
