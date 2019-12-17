import React, { Component } from 'react'
import * as board from'service/board';
import BoardList from 'components/board/BoardList';
import BoardView from 'components/board/BoardView';
import PageHeader from 'components/PageHeader'
import queryString from 'query-string';
import {MDBContainer} from 'mdbreact';
import * as event from'service/event';
//img
import headerImg from 'img/about/pageheader.jpg'

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bo_table:"news",
      category:"",
      boardList : []
    };
  }
  componentDidUpdate(prevProps, prevState){
    if (this.props !== prevProps) {
      this.getListData(window.location.host ,"printlist", this.state.bo_table, this.state.category, 1);
    }
  }
  componentDidMount() {
    this.getListData(window.location.host ,"printlist", this.state.bo_table, this.state.category, 1);
    event.pagenations("News", "4")
  }
  getListData = async (server,status, bo_table, category, leng) => {
    var listData = await Promise.all([
      board.getList(server, status, bo_table, category, leng)
    ])
    this.setState(prevState => ({
      ...prevState,
      boardList : listData[0]
    }));
  }
  render() {
    const query = queryString.parse(this.props.location.search);
    return (
      <main id="newPage">
        <PageHeader 
          page="news"
          pagebg={headerImg}
          pageText="뉴스"
          title="printis 뉴스"
        />
        <section>
          <div id="newsConts" className="boardListConts">
            <MDBContainer>
              {!query.wr_id ? (
                <BoardList 
                  page="News"
                  list={this.state} 
                />
              ) : (
                <BoardView 
                  wr_id={query.wr_id} 
                  bo_table={this.state.bo_table} 
                />
              )}
            </MDBContainer>
          </div>
        </section>
      </main>
    )
  }
}

export default News;