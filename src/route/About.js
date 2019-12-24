import React, { Component } from 'react';
import PageHeader from 'components/PageHeader'
import {MDBContainer} from 'mdbreact'
import ScrollAnimation from 'react-animate-on-scroll';
import GoogleMaps from 'components/GoogleMaps';
import Swiper from 'react-id-swiper';
import * as event from'service/event';
import { FaDownload } from 'react-icons/fa';
//css, scss 
import "css/about.scss";

class About extends Component {
  state = {
    philosophyItems : [
      {
        "philosophyImg" : "http://printis.cdn3.cafe24.com/about/philosophy_1.png",
        "philosophyTit" : "고객만족의 품질 제공",
        "philosophyTxt" : "고객만족의 품질 제공"
      },
      {
        "philosophyImg" : "http://printis.cdn3.cafe24.com/about/philosophy_2.png",
        "philosophyTit" : "기술적진보",
        "philosophyTxt" : "신기술, 신사업 활성화"
      },
      {
        "philosophyImg" : "http://printis.cdn3.cafe24.com/about/philosophy_3.png",
        "philosophyTit" : "바른 경영",
        "philosophyTxt" : "사회와 직원과 함께하는 바른 경영"
      }
    ],
    historyItems : [
      {
        "years" : "2016",
        "month" : [
          {
            "date" : "2016.01.05",
            "content" : [
              {
                "text" : "프린티스 창업"
              }
            ]
          },
          {
            "date" : "2016.06",
            "content" : [
              {
                "text" : "㈜LG전자 1차벤더 등록."
              },
              {
                "text" : "460(평면인쇄장비) 개발 및 상용화완료"
              },
              {
                "text" : "UV INDEX 개발 및 상용화완료"
              }              
            ]
          },
          {
            "date" : "2016.07",
            "content" : [
              {
                "text" : "㈜LG전자 REVERSE CASTING M/C 장비개발 및 납품"
              }              
            ]
          },
          {
            "date" : "2016.11",
            "content" : [
              {
                "text" : "일본 가와사키로보티스 판매점 등록"
              },
              {
                "text" : "스크린인쇄장치 특허출원 (10-2016-1047555)"
              }         
            ]
          }
        ]
      },
      {
        "years" : "2017",
        "month" : [
          {
            "date" : "2017.01",
            "content" : [
              {
                "text" : "3D라벨장비 개발 및 상용화완료"
              }
            ]
          },
          {
            "date" : "2017.02",
            "content" : [
              {
                "text" : "기업부설연구소등록"
              }          
            ]
          },
          {
            "date" : "2017.04",
            "content" : [
              {
                "text" : "㈜KAC 인쇄장치 납품"
              }              
            ]
          },
          {
            "date" : "2017.06",
            "content" : [
              {
                "text" : "Vision Cell Lami Machine 개발 및 상용화완료"
              }      
            ]
          },
          {
            "date" : "2017.08",
            "content" : [
              {
                "text" : "반자동 스크린인쇄장비 (T1-4030) 개발 및 상용화완료"
              }      
            ]
          }
        ]
      },
      {
        "years" : "2018",
        "month" : [
          {
            "date" : "2018.05",
            "content" : [
              {
                "text" : "AM 자동인쇄기 개발 및 상용화완료"
              }
            ]
          },
          {
            "date" : "2018.11",
            "content" : [
              {
                "text" : "MARK2 개발 및 상용화완료"
              }          
            ]
          }
        ]
      },
      {
        "years" : "2019",
        "month" : [
          {
            "date" : "2019.05",
            "content" : [
              {
                "text" : "벤처기업등록"
              }
            ]
          },
          {
            "date" : "2019.06",
            "content" : [
              {
                "text" : "이노비즈(기술혁신형 중소기업) 기업등록"
              }          
            ]
          }
        ]
      }      
    ],
    awardsItems : [
      {
        "awardsImg" : "http://printis.cdn3.cafe24.com/about/award_1.jpg",
        "awardsAlt" : "품질경영시스템 인증서"
      },
      {
        "awardsImg" : "http://printis.cdn3.cafe24.com/about/award_2.jpg",
        "awardsAlt" : "가와사키로보틱스 판매인증서"
      },
      {
        "awardsImg" : "http://printis.cdn3.cafe24.com/about/award_3.jpg",
        "awardsAlt" : "기술혁신형 중소기업 확인서"
      },
      {
        "awardsImg" : "http://printis.cdn3.cafe24.com/about/award_4.jpg",
        "awardsAlt" : "연구개발전담부서 인정서"
      },
      {
        "awardsImg" : "http://printis.cdn3.cafe24.com/about/award_5.jpg",
        "awardsAlt" : "기업부설연구소 인정서"
      },
      {
        "awardsImg" : "http://printis.cdn3.cafe24.com/about/award_6.jpg",
        "awardsAlt" : "벤처기업확인서"
      },
      {
        "awardsImg" : "http://printis.cdn3.cafe24.com/about/award_7.jpg",
        "awardsAlt" : "스크린협회 이사임명장"
      },
      {
        "awardsImg" : "http://printis.cdn3.cafe24.com/about/award_11.jpg",
        "awardsAlt" : "한국스크린인쇄공업협회회원증"
      },
      {
        "awardsImg" : "http://printis.cdn3.cafe24.com/about/award_8.jpg",
        "awardsAlt" : "중소기업 확인서"
      },
      {
        "awardsImg" : "http://printis.cdn3.cafe24.com/about/award_9.jpg",
        "awardsAlt" : "공장등록증"
      },
      {
        "awardsImg" : "http://printis.cdn3.cafe24.com/about/award_10.jpg",
        "awardsAlt" : "클린사업장 인증서"
      }
    ],
    parterItems : [
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_1.png",
        "parterTitle" : "삼성"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_2.png",
        "parterTitle" : "LG"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_3.png",
        "parterTitle" : "LG 이노텍"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_4.png",
        "parterTitle" : "희성전자주식회사"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_5.png",
        "parterTitle" : "ILJIN"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_6.png",
        "parterTitle" : "ELK"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_7.png",
        "parterTitle" : "SMAC"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_8.png",
        "parterTitle" : "한국공항공사"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_9.png",
        "parterTitle" : "Markone"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_10.png",
        "parterTitle" : "DigiTech systems"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_11.png",
        "parterTitle" : "이앤에이치"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_12.png",
        "parterTitle" : "INOTOUCH"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_13.png",
        "parterTitle" : "meeredp"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_14.png",
        "parterTitle" : "Yahoo"
      },
      {
        "parterImg" : "http://printis.cdn3.cafe24.com/about/partner_15.png",
        "parterTitle" : "AVIC"
      }
    ]
  }
  componentDidMount() {
    event.pagenations("About", "1")
    event.pageIn("#aboutPage")
  }
  componentWillUnmount() {
    event.pageOut("#aboutPage")
  }
  render() {
    const params = {
      slidesPerView: 1,
      loop : true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints : {
        1200 : {
          slidesPerView: 3,
        },
        992 : {
          slidesPerView: 3,
        },
        768 : {
          slidesPerView: 3,
        },
        576 : {
          slidesPerView: 1,
        },
        380 : {
          slidesPerView: 1,
        }
      }
    }
    return (
      <main id="aboutPage">
        <PageHeader 
          page="about"
          pagebg="http://printis.cdn3.cafe24.com/about/pageheader.jpg"
          pageText="회사소개"
          title="PRINTIS 회사소개"
        />
        <section id="philosophys" className="subSections">
          <MDBContainer>
            <div className="subTitArea">
              <h2 className="sectionSubTitles">경영철학</h2>
            </div>
            <div id="philosophyConts" className="clear">
            {this.state.philosophyItems.map((philosophyItem, i)=>(
              <div className="philosophyItems" key={i}>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={i*300}>
                  <div className="philosophyImg">
                    <img src={philosophyItem.philosophyImg} alt={"프린티스 "+philosophyItem.philosophyTit} />
                  </div>
                  <div>
                    <p className="philosophyTit">{philosophyItem.philosophyTit}</p>
                  </div>
                  <div>
                    <p className="philosophyTxt">{philosophyItem.philosophyTxt}</p>
                  </div>
                </ScrollAnimation>
              </div>
            ))}
            </div>
          </MDBContainer>
        </section>
        <section id="aboutCi" className="subSections">
          <MDBContainer>
            <div className="subTitArea">
              <h2 className="sectionSubTitles">CI소개</h2>
            </div>
            <div id="ciConts" className="clear">
              <div className="ciItems">
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0}>
                  <div id="ciImgs">
                    <img src="http://printis.cdn3.cafe24.com/about/ci.png" alt="printis ci" title="printis ci" />
                  </div>
                </ScrollAnimation>
              </div>
              <div className="ciItems">
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300}>
                  <div className="ciItemTxt">
                    <p id="ciSlogan">Printis is creative technology</p>
                    <p id="ciSurpotTxt">PRINT + TECHNOLOGY + IS의 합성어로 만들어진<br/> 브랜드명으로 인쇄관련 장비제작 및 주변 자동화 장비<br/> 제작을 통해 사회에 이바지 하고자 합니다.</p>
                    <div>
                      <a id="ciDownload" href="http://printis.co.kr/printis_logo.ai"><FaDownload />다운로드</a>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </MDBContainer>
        </section>
        <section id="aboutGreetings" className="subSections">
          <MDBContainer>
            <div className="subTitArea">
              <h2 className="sectionSubTitles">CEO 인사말</h2>
            </div>
            <div id="greetingConts">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0}>
                <h3 className="sectionSubTitles">새로움을 즐기며<br/> 새로운 기술을 선도하는 기업</h3>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300}>
                <p className="greetingTxt">프린티스는 끊임없이 변화하는 산업 환경에서 스크린인쇄산업도 새로운 기술로 변화를 이끌어가야 한다는 마음가짐으로 2016년 창립이래 스크린인쇄장비, 건조기, 로보트를 이용한  자동화장비의 다양한 분야에서 지속적인 성장과 발전을 거듭하고 있습니다.<br/><br/><br/>그동안의 축적된 노하우와 경험, 기술과 연구개발를 통해 고객에게 더 좋은 제품과 서비스, 더 큰 만족과 니즈를 충족시켜 드리고자 노력할 것을 약속 드립니다.<br/><br/><br/>끊임없는 새로운 도전과 혁신으로 스크린인쇄 및 자동화 장비분야에서 경쟁력 있는 기업, 착한 기업으로 나아갈수 있도록 최선을 다 할 것입니다. 앞으로도 지속적인 관심과 격려 부탁 드립니다.<br/><br/><br/>감사합니다.</p>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={600}>
                <p className="ceoNames"><span>프린티스 대표</span><img src="http://printis.cdn3.cafe24.com/about/ceoname.png" alt="프린티스 대표 전병문" /></p>
              </ScrollAnimation>
            </div>
          </MDBContainer>
        </section>
        <section id="aboutHistory" className="subSections">
          <MDBContainer>
            <div className="subTitArea">
              <h2 className="sectionSubTitles">연혁</h2>
            </div>
            <div id="historyConts">
            {this.state.historyItems.map((historyItem,i)=>(
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={i*300} key={i}>
                <div className="clear historyLines">
                  <div className="historyYears">
                    <span>{historyItem.years}</span>
                  </div>
                  <div className="historyMonth">
                  {historyItem.month.map((months, j)=>(
                    <div className="clear historyDetail" key={j}>
                      <div className="historyDate">
                        <span className="line2"></span>
                        <span>{months.date}</span>
                      </div>
                      <div className="historyTexts">
                      {months.content.map((contents, z)=>(
                        <div key={z}>
                          <span>{contents.text}</span>  
                        </div>
                      ))}  
                      </div>
                    </div>
                  ))}  
                  <span className="lines"></span>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
            </div>
          </MDBContainer>
        </section>
        <section id="aboutAwards" className="subSections">
          <MDBContainer>
            <div className="subTitArea">
              <h2 className="sectionSubTitles">인증 및 특허</h2>
            </div>
            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={0}>
              <div id="awardsConts">
                <div id="awardList">
                  <Swiper {...params}>
                  {this.state.awardsItems.map((awardsItem, i)=>(
                    <div key={i}>
                      <img src={awardsItem.awardsImg} alt={awardsItem.awardsAlt} title={awardsItem.awardsAlt} />
                    </div>
                  ))}
                  </Swiper>
                </div>
              </div>
            </ScrollAnimation>
          </MDBContainer>
        </section>
        <section id="aboutPartners" className="subSections">
          <MDBContainer>
            <div className="subTitArea">
              <h2 className="sectionSubTitles">고객사</h2>
            </div>
            <div id="partnerConts">
              <ul id="partnerLists" className="clear">
              {this.state.parterItems.map((parterItem, i)=>(
                <li key={i}>
                  <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={i*100}>
                    <img alt={parterItem.parterTitle} title={parterItem.parterTitle} src={parterItem.parterImg} />
                  </ScrollAnimation>
                </li>
              ))}
              </ul>
            </div>
          </MDBContainer>
        </section>
        <section id="locations" className="subSections">
          <GoogleMaps />
        </section>
      </main>
    )
  }
}

export default About;