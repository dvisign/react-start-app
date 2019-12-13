import React, { Component } from 'react';
import PageHeader from 'components/PageHeader'
import {MDBContainer} from 'mdbreact'
import GoogleMaps from 'components/GoogleMaps';
//css, scss
import "css/about.scss";
//img
import headerImg from 'img/about/pageheader.jpg'
import philosophy_1 from 'img/about/philosophy_1.png';
import philosophy_2 from 'img/about/philosophy_2.png';
import philosophy_3 from 'img/about/philosophy_3.png';
import ci from 'img/about/ci.png';
import ceoName from 'img/about/ceoname.png';

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
    ]
  }
  render() {
    return (
      <main id="aboutPage">
        <PageHeader 
          page="about"
          pagebg={headerImg}
          pageText="회사소개"
        />
        <section id="philosophys" className="subSections">
          <MDBContainer>
            <div className="subTitArea">
              <h2 className="sectionSubTitles">경영철학</h2>
            </div>
            <div id="philosophyConts" className="clear">
            {this.state.philosophyItems.map((philosophyItem, i)=>(
              <div className="philosophyItems" key={i}>
                <div className="philosophyImg">
                  <img src={philosophyItem.philosophyImg} alt={"프린티스 "+philosophyItem.philosophyTit} />
                </div>
                <div>
                  <p className="philosophyTit">{philosophyItem.philosophyTit}</p>
                </div>
                <div>
                  <p className="philosophyTxt">{philosophyItem.philosophyTxt}</p>
                </div>
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
                <div id="ciImgs">
                  <img src={ci} alt="" />
                </div>
              </div>
              <div className="ciItems">
                <div className="ciItemTxt">
                  <p id="ciSlogan">Printis is creative technology</p>
                  <p id="ciSurpotTxt">PRINT + TECHNOLOGY + IS의 합성어로 만들어진<br/> 브랜드명으로 인쇄관련 장비제작 및 주변 자동화 장비<br/> 제작을 통해 사회에 이바지 하고자 합니다.</p>
                </div>
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
              <h3 className="sectionSubTitles">새로움을 즐기며<br/> 새로운 기술을 선도하는 기업</h3>
              <p className="greetingTxt">프린티스는 끊임없이 변화하는 산업 환경에서 스크린인쇄산업도 새로운 기술로 변화를 이끌어가야 한다는 마음가짐으로 2016년 창립이래 스크린인쇄장비, 건조기, 로보트를 이용한  자동화장비의 다양한 분야에서 지속적인 성장과 발전을 거듭하고 있습니다.<br/><br/><br/>그동안의 축적된 노하우와 경험, 기술과 연구개발를 통해 고객에게 더 좋은 제품과 서비스, 더 큰 만족과 니즈를 충족시켜 드리고자 노력할 것을 약속 드립니다.<br/><br/><br/>끊임없는 새로운 도전과 혁신으로 스크린인쇄 및 자동화 장비분야에서 경쟁력 있는 기업, 착한 기업으로 나아갈수 있도록 최선을 다 할 것입니다. 앞으로도 지속적인 관심과 격려 부탁 드립니다.<br/><br/><br/>감사합니다.</p>
              <p className="ceoNames"><span>프린티스 대표</span><img src={ceoName} alt="프린티스 대표 전병문" /></p>
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
              <div className="clear historyLines" key={i}>
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
            ))}
            </div>
          </MDBContainer>
        </section>
        <section id="aboutAwords" className="subSections">
          <MDBContainer>
            <div className="subTitArea">
              <h2 className="sectionSubTitles">인증 및 특허</h2>
            </div>
          </MDBContainer>
        </section>
        <section id="aboutPartners" className="subSections">
          <MDBContainer>
            <div className="subTitArea">
              <h2 className="sectionSubTitles">고객사</h2>
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