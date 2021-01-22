import React, { Component } from "react";

import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="left">
          <img src="/images/Tsunami.png" alt="tsunami"></img>
        </div>
        <div className="middle">
          <div className="link">
            <a>회사소개</a>
            <a>이용약관</a>
            <a>개인정보처리방침</a>
            <a>사업자 정보확인</a>
            <a>제휴/입점 안내</a>
          </div>
          <div className="info">
            <span>
              (주)쓰나미 | 대표 : 황인태 | 주소 : 경기도 용인시 수지구 손곡로 17
              | 사업자등록번호 : 120-81-08227
            </span>
            <span>
              고객센터 : 1544-2884 | 개인정보관리책임자 :
              김성남(monamihelp@monami.com) | 통신판매업신고 :
              제2008-용인수지-0117
            </span>
            <span>
              본 사이트의 모든 저작물의 저작권은 (주)쓰나미에 있습니다.
            </span>
            <span>
              무단 복제나 도용은 저작권법 제 97조 5항에 의해 법으로 금지되어
              있습니다.
            </span>
            <span>Copyright(c) (주)쓰나미 All rights Reserved.</span>
          </div>
        </div>
        <div className="right">
          <select>
            <option>쓰나미공식사이트</option>
            <option>쓰나르떼</option>
            <option>쓰나미컨셉스토어</option>
            <option>쓰나미환경사랑미술대회</option>
            <option>쓰나미기업서비스</option>
          </select>
          <h4>쓰나미 서비스</h4>
          <div>
            <span>고객님은 안전거래를 위해 모든 거래 결제 시</span>
            <span>저희 쇼핑몰에서 가입한 전자 결제의</span>
            <span>매매보호(에스크로) 서비스를 이용하실 수</span>
            <span>있습니다.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
