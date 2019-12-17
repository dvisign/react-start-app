import React, { Component } from 'react'
import {MDBContainer, MDBAnimation} from 'mdbreact';
import * as board from'service/board';
import { NavLink } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import GoogleMaps from 'components/GoogleMaps';
import * as event from'service/event';
// css, scss
import "css/main.scss"
import 'swiper/css/swiper.css'
// img
import print_1 from 'img/main/print/print_1.png';
import print_2 from 'img/main/print/print_2.png';
import print_3 from 'img/main/print/print_3.png';
import print_4 from 'img/main/print/print_4.png';
import auto_1 from 'img/main/auto/auto_1.png';
import auto_2 from 'img/main/auto/auto_2.png';
import auto_3 from 'img/main/auto/auto_3.png';
import partner_1 from 'img/main/partners/logo_1.png';
import partner_2 from 'img/main/partners/logo_2.png';
import partner_3 from 'img/main/partners/logo_3.png';
import partner_4 from 'img/main/partners/logo_4.png';
import partner_5 from 'img/main/partners/logo_5.png';
import partner_6 from 'img/main/partners/logo_6.png';
import partner_7 from 'img/main/partners/logo_7.png';
import partner_8 from 'img/main/partners/logo_8.png';
import partner_9 from 'img/main/partners/logo_9.png';
import partner_10 from 'img/main/partners/logo_10.png';
import partner_11 from 'img/main/partners/logo_11.png';
import partner_12 from 'img/main/partners/logo_12.png';
import partner_13 from 'img/main/partners/logo_13.png';
import partner_14 from 'img/main/partners/logo_14.png';
import partner_15 from 'img/main/partners/logo_15.png';

class Main extends Component {
  componentDidMount() {
    document.title = "printis"
    event.pagenations("index","0")
  }
  render() {
    return (
      <main id="mainPage">
        <section id="mainBanner">
          <MDBContainer id="bannerTitle">
            <MDBAnimation reveal type="fadeInUp">
              <h2 className="sectionTitles">새로움을 즐기며<br/> 새로운 기술을 선도하는 기업</h2>
              <p className="sectionSubTitles">Printis is creative technology</p>
            </MDBAnimation>
          </MDBContainer>
        </section>
        <section id="newsLatest">
          <MDBContainer>
            <NewsList />
          </MDBContainer>
        </section>
        <section id="prints">
          <MDBContainer>
            <div className="subTitArea">
              <h2 className="sectionSubTitles">인쇄장비</h2>
            </div>
            <PrintProducts/>
          </MDBContainer>
        </section>
        <section id="autos">
          <MDBContainer>
            <div className="subTitArea">
              <h2 className="sectionSubTitles">인쇄장비</h2>
            </div>
            <AutoProducts/>
          </MDBContainer>
        </section>
        <section id="partners">
          <MDBContainer>
            <Partners 
              partner={this.props}
            />
          </MDBContainer>
        </section>
        <section id="contact">
          <MDBContainer>
            <ul id="contactInfo" className="clear">
              <li>
                <MDBAnimation reveal type="fadeInUp" delay="0">
                  <h2 className="sectionSubTitles">Contact<br/>Information</h2>
                </MDBAnimation>
              </li>
              <li>
                <MDBAnimation reveal type="fadeInUp" delay="0.3s">
                  <h2 className="sectionSubTitles">010. 9181. 4265</h2>
                  <p><span>Tel. </span>032. 812. 6272<span>Fax. </span>032. 812. 6273</p>
                  <p><span>Email. </span>printis001@hanmail.net</p>
                </MDBAnimation>
              </li>
              <li>
                <MDBAnimation reveal type="fadeInUp" delay="0.6s">
                  <p>인천광역시 남동구 남동동로 33번길 10<br/> 2동 (154B 9L)</p>
                  <p>2 dong, 10 Namdongdong-ro<br/>33beon-gil, Namdong-go,<br/>Inccheon, Republic of Korea</p>
                </MDBAnimation>
              </li>
            </ul>
          </MDBContainer>
        </section>
        <section id="locations">
          <GoogleMaps />
        </section>
      </main>
    )
  }
}
class NewsList extends Component {
  state = {
    selectid : "",
    selectImg : "",
    selectAlt : "",
    newsLatest : []
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.selectid !== this.state.selectid) {
      return true;
    } else {
      return false;
    }
  }
  componentDidMount() {
    this.getLatestList(window.location.host ,"latest", "news", "wr_datetime", 5);
  }
  getLatestList = async (server, status, bo_table, sort, leng) => {
    var listData = await Promise.all([
      board.latestList(server, status, bo_table, sort, leng)
    ])
    this.setState(prevState => ({
      ...prevState,
      selectid : listData[0][0].wr_id,
      selectImg : listData[0][0].wr_img,
      selectAlt : listData[0][0].wr_subject,
      newsLatest : listData[0]
    }));
  }
  newslatest = (data) => {
    this.setState({
      ...this.state,
      selectid : data.wr_id,
      selectImg : data.wr_img,
      selectAlt : data.wr_subject
    })
  }
  render () {
    return (
      <div id="newsListContents" className="clear">
        <div id="newsThumbs">
          <div>
            <img src={this.state.selectImg} alt={this.state.selectAlt} />
          </div>
        </div>
        <div className="newsLists">
          <div>
            <h2 className="sectionSubTitles">NEWS</h2>
          </div>
          {this.state.newsLatest.map((newsLatests, i) => (
          <div className="newsItems" key={i}>
            <NavLink onMouseOver={(e)=>this.newslatest(newsLatests)} to={"/printis/News/?wr_id="+newsLatests.wr_id}>{newsLatests.wr_subject}</NavLink>
            <span className="listDateTime">{newsLatests.wr_datetime}</span>
          </div>
          ))}
        </div>
      </div>
    )
  }
}
function PrintProducts(state) {
  state = {
    printlist : [
      {
        "productImg":print_1,
        "productSbuject":"인쇄장비",
        "links": "/printis/Print/print/"
      },
      {
        "productImg":print_2,
        "productSbuject":"라벨장비",
        "links": "/printis/Print/label/"
      },
      {
        "productImg":print_3,
        "productSbuject":"제판장비",
        "links": "/printis/Print/engraving/"
      },
      {
        "productImg":print_4,
        "productSbuject":"건조장비",
        "links": "/printis/Print/dry/"
      }
    ]
  }
  return(
    <div>
        <ul id="printList" className="clear">
        {state.printlist.map((printlists, i)=>(
          <li key={i} id={"printlists_"+i} onMouseOver={(e) => event.overEvent("#printList","li",i+1)} onMouseLeave={(e) => event.leaveEvent("#printList","li")}>
            <MDBAnimation reveal type="fadeInUp" delay={i*0.3+"s"}>
              <NavLink to={printlists.links}>
                <div className="productTitle">
                  <h2>{printlists.productSbuject}</h2>
                </div>
                <div id={"print_"+i} className="printThumbs">
                  <img src={printlists.productImg} alt={"프린티스 "+printlists.productSbuject} />
                </div>
              </NavLink>
            </MDBAnimation>
          </li>
        ))}
        </ul>
    </div>
  )
}
function AutoProducts(state) {
  state = {
    autolist : [
      {
        "productImg":auto_1,
        "productSbuject":"TOUCH 장비",
        "links" : "/printis/Automation/"
      },
      {
        "productImg":auto_2,
        "productSbuject":"로보트자동화",
        "links" : "/printis/Automation/"
      },
      {
        "productImg":auto_3,
        "productSbuject":"제판장비",
        "links" : "/printis/Automation/"
      }
    ]
  }
  return(
    <div>
        <ul id="autoList" className="clear">
        {state.autolist.map((autolists, i)=>(
          <li key={i} id={"autolists_"+i} onMouseOver={(e) => event.overEvent("#autoList","li",i+1)} onMouseLeave={(e) => event.leaveEvent("#autoList","li")}>
            <MDBAnimation reveal type="fadeInUp" delay={i*0.3+"s"}>
              <NavLink to={autolists.links}>
                <div className="productTitle">
                  <h2>{autolists.productSbuject}</h2>
                </div>
                <div id={"auto_"+i} className="autoThumbs">
                  <img src={autolists.productImg} alt={"프린티스 "+autolists.productSbuject} />
                </div>
              </NavLink>
            </MDBAnimation>
          </li>
        ))}
        </ul>
    </div>
    )
}
function Partners(state) {
  state = {
    partner : [
      {
        "logoImg" : partner_1,
        "logoAlt" : "삼성 samsung"
      },
      {
        "logoImg" : partner_2,
        "logoAlt" : "엘지 LG"
      },
      {
        "logoImg" : partner_3,
        "logoAlt" : "엘지 이노텍 LG Innotek"
      },
      {
        "logoImg" : partner_4,
        "logoAlt" : "희성전자 HEESUNG ELECTRONICS"
      },
      {
        "logoImg" : partner_5,
        "logoAlt" : "ILJIN"
      },
      {
        "logoImg" : partner_6,
        "logoAlt" : "ELK"
      },
      {
        "logoImg" : partner_7,
        "logoAlt" : "SMAC"
      },
      {
        "logoImg" : partner_8,
        "logoAlt" : "한국공항공사"
      },
      {
        "logoImg" : partner_9,
        "logoAlt" : "Markone"
      },
      {
        "logoImg" : partner_10,
        "logoAlt" : "Digitech Systems"
      },
      {
        "logoImg" : partner_11,
        "logoAlt" : "이앤에이치"
      },
      {
        "logoImg" : partner_12,
        "logoAlt" : "INOTOUCH"
      },
      {
        "logoImg" : partner_13,
        "logoAlt" : "meeredp"
      },
      {
        "logoImg" : partner_14,
        "logoAlt" : "Yahoo"
      },
      {
        "logoImg" : partner_15,
        "logoAlt" : "AVIC"
      }
    ]
  }
  const params = {
    slidesPerView: 5,
    freeMode: true,
    loop:true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  } 
  return (
    <div>
      <Swiper {...params}>
      {state.partner.map((partners, i)=>(
        <div key={i}>
          <div>
            <img src={partners.logoImg} alt={partners.logoAlt} title={partners.logoAlt} />
          </div>
        </div>
      ))}
      </Swiper>
    </div>
  )
}

export default Main;