import React, { Component } from 'react';
import PageHeader from 'components/PageHeader'
import {MDBContainer} from 'mdbreact'
import ScrollAnimation from 'react-animate-on-scroll';
import GoogleMaps from 'components/GoogleMaps';
import Swiper from 'react-id-swiper';
import * as event from'service/event';

//css, scss
import "css/about.scss";
//img
import headerImg from 'img/about/pageheader.jpg'
import philosophy_1 from 'img/about/philosophy_1.png';
import philosophy_2 from 'img/about/philosophy_2.png';
import philosophy_3 from 'img/about/philosophy_3.png';
import ci from 'img/about/ci.png';
import ceoName from 'img/about/ceoname.png';
import awards_1 from 'img/about/award_1.jpg';
import awards_2 from 'img/about/award_2.jpg';
import awards_3 from 'img/about/award_3.jpg';
import awards_4 from 'img/about/award_4.jpg';
import awards_5 from 'img/about/award_5.jpg';
import awards_6 from 'img/about/award_6.jpg';
import awards_7 from 'img/about/award_7.jpg';
import awards_8 from 'img/about/award_8.jpg';
import awards_9 from 'img/about/award_9.jpg';
import awards_10 from 'img/about/award_10.jpg';
import awards_11 from 'img/about/award_11.jpg';
import partner_1 from 'img/about/partner_1.png';
import partner_2 from 'img/about/partner_2.png';
import partner_3 from 'img/about/partner_3.png';
import partner_4 from 'img/about/partner_4.png';
import partner_5 from 'img/about/partner_5.png';
import partner_6 from 'img/about/partner_6.png';
import partner_7 from 'img/about/partner_7.png';
import partner_8 from 'img/about/partner_8.png';
import partner_9 from 'img/about/partner_9.png';
import partner_10 from 'img/about/partner_10.png';
import partner_11 from 'img/about/partner_11.png';
import partner_12 from 'img/about/partner_12.png';
import partner_13 from 'img/about/partner_13.png';
import partner_14 from 'img/about/partner_14.png';
import partner_15 from 'img/about/partner_15.png';

class About extends Component {
  state = {
    philosophyItems : [
      {
        "philosophyImg" : philosophy_1,
        "philosophyTit" : "고객만족의 품질 제공",
        "philosophyTxt" : "고객만족의 품질 제공"
      },
      {
        "philosophyImg" : philosophy_2,
        "philosophyTit" : "기술적진보",
        "philosophyTxt" : "신기술, 신사업 활성화"
      },
      {
        "philosophyImg" : philosophy_3,
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
        "awardsImg" : awards_1,
        "awardsAlt" : "품질경영시스템 인증서"
      },
      {
        "awardsImg" : awards_2,
        "awardsAlt" : "가와사키로보틱스 판매인증서"
      },
      {
        "awardsImg" : awards_3,
        "awardsAlt" : "기술혁신형 중소기업 확인서"
      },
      {
        "awardsImg" : awards_4,
        "awardsAlt" : "연구개발전담부서 인정서"
      },
      {
        "awardsImg" : awards_5,
        "awardsAlt" : "기업부설연구소 인정서"
      },
      {
        "awardsImg" : awards_6,
        "awardsAlt" : "벤처기업확인서"
      },
      {
        "awardsImg" : awards_7,
        "awardsAlt" : "스크린협회 이사임명장"
      },
      {
        "awardsImg" : awards_11,
        "awardsAlt" : "한국스크린인쇄공업협회회원증"
      },
      {
        "awardsImg" : awards_8,
        "awardsAlt" : "중소기업 확인서"
      },
      {
        "awardsImg" : awards_9,
        "awardsAlt" : "공장등록증"
      },
      {
        "awardsImg" : awards_10,
        "awardsAlt" : "클린사업장 인증서"
      }
    ],
    parterItems : [
      {
        "parterImg" : partner_1,
        "parterTitle" : "삼성"
      },
      {
        "parterImg" : partner_2,
        "parterTitle" : "LG"
      },
      {
        "parterImg" : partner_3,
        "parterTitle" : "LG 이노텍"
      },
      {
        "parterImg" : partner_4,
        "parterTitle" : "희성전자주식회사"
      },
      {
        "parterImg" : partner_5,
        "parterTitle" : "ILJIN"
      },
      {
        "parterImg" : partner_6,
        "parterTitle" : "ELK"
      },
      {
        "parterImg" : partner_7,
        "parterTitle" : "SMAC"
      },
      {
        "parterImg" : partner_8,
        "parterTitle" : "한국공항공사"
      },
      {
        "parterImg" : partner_9,
        "parterTitle" : "Markone"
      },
      {
        "parterImg" : partner_10,
        "parterTitle" : "DigiTech systems"
      },
      {
        "parterImg" : partner_11,
        "parterTitle" : "이앤에이치"
      },
      {
        "parterImg" : partner_12,
        "parterTitle" : "INOTOUCH"
      },
      {
        "parterImg" : partner_13,
        "parterTitle" : "meeredp"
      },
      {
        "parterImg" : partner_14,
        "parterTitle" : "Yahoo"
      },
      {
        "parterImg" : partner_15,
        "parterTitle" : "AVIC"
      }
    ]
  }
  componentDidMount() {
    event.pagenations("About", "1")
  }
  render() {
    const params = {
      slidesPerView: 3,
      loop : true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }
    return (
      <main id="aboutPage">
        <PageHeader 
          page="about"
          pagebg={headerImg}
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
                    <img src={ci} alt="" />
                  </div>
                </ScrollAnimation>
              </div>
              <div className="ciItems">
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={300}>
                  <div className="ciItemTxt">
                    <p id="ciSlogan">Printis is creative technology</p>
                    <p id="ciSurpotTxt">PRINT + TECHNOLOGY + IS의 합성어로 만들어진<br/> 브랜드명으로 인쇄관련 장비제작 및 주변 자동화 장비<br/> 제작을 통해 사회에 이바지 하고자 합니다.</p>
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
                <p className="ceoNames"><span>프린티스 대표</span><img src={ceoName} alt="프린티스 대표 전병문" /></p>
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