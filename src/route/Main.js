import React, { Component } from 'react'
import "css/main.scss"
import {MDBContainer} from 'mdbreact';
import * as board from'service/board';
import { NavLink } from 'react-router-dom';
import print_1 from 'img/main/print/print_1.png';
import print_2 from 'img/main/print/print_2.png';
import print_3 from 'img/main/print/print_3.png';
import print_4 from 'img/main/print/print_4.png';

class Main extends Component {
  render() {
    return (
      <main id="mainPage">
        <section id="mainBanner">
          <MDBContainer id="bannerTitle">
            <div>
              <h2 className="sectionTitles">새로움을 즐기며<br/> 새로운 기술을 선도하는 기업</h2>
              <p className="sectionSubTitles">Printise is creative technology</p>
            </div>
          </MDBContainer>
        </section>
        <section id="newsLatest">
          <MDBContainer>
            <NewsList />
          </MDBContainer>
        </section>
        <section id="prints">
          <MDBContainer>
            <PrintProducts/>
          </MDBContainer>
        </section>
        <section id="autos">
          <MDBContainer>
            <AutoProducts/>
          </MDBContainer>
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
            <NavLink onMouseOver={(e)=>this.newslatest(newsLatests)} to={"/printice/news/"+newsLatests.wr_id}>{newsLatests.wr_subject}</NavLink>
            <span className="listDateTime">{newsLatests.wr_datetime}</span>
          </div>
          ))}
        </div>
      </div>
    )
  }
}
class PrintProducts extends Component {
  state = {
    printlist : [
      {
        "productImg":print_1,
        "productSbuject":"인쇄장비"
      },
      {
        "productImg":print_2,
        "productSbuject":"라벨장비"
      },
      {
        "productImg":print_3,
        "productSbuject":"제판장비"
      },
      {
        "productImg":print_4,
        "productSbuject":"건조장비"
      }
    ]
  }
  render() {
    return(
      <div>
        <ul id="printList" className="clear">
        {this.state.printlist.map((printlists, i)=>(
          <li key={i}>
            <div className="productTitle">
              <h2 className="sectionSubTitles">{printlists.productSbuject}</h2>
            </div>
            <div id={"print_"+i} className="printThumbs">
              <img src={printlists.productImg} alt={"프린티스 "+printlists.productSbuject} />
            </div>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}
class AutoProducts extends Component {
  render() {
    return(
      <div>
        auto product
      </div>
    )
  }
}
export default Main;