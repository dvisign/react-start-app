import React, { Component } from 'react'
import "css/main.scss"
import MainBanner from "img/main/MainBanner.jpg";
import {Container, Row, Col} from 'mdbreact';
import * as board from'service/board';

class Main extends Component {
  render() {
    return (
      <main id="mainPage">
        <section id="mainBanner">
          <div>
            <img src={MainBanner} alt="printice 메인배너" />
          </div>
          <Container id="bannerTitle">
            <div>
              <h2 className="sectionTitles">새로움을 즐기며<br/> 새로운 기술을 선도하는 기업</h2>
              <p className="sectionSubTitles">Printise is creative technology</p>
            </div>
          </Container>
        </section>
        <section id="newsLatest">
          <Container>
            <NewsList />
          </Container>
        </section>
      </main>
    )
  }
}
class NewsList extends Component {
  state = {
    newsLatest : []
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
      newsLatest : listData[0]
    }));
  }
  render () {
    return (
      <Row>
        <Col size="5">
          <div>
            {this.state.newsLatest.map((newsThumbs, i) => (
              <div key={i}>
                <img src={newsThumbs.wr_img} alt={newsThumbs.wr_subject} />
              </div>
            ))}
          </div>
        </Col>
        <Col size="7">
          {this.state.newsLatest.map((newsLatests, i) => (
            <div key={i}>
              {newsLatests.wr_subject}
            </div>
          ))}
        </Col>
      </Row>
    )
  }
}
export default Main;