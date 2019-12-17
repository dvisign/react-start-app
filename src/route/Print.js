import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as board from'service/board';
import BoardList from 'components/board/BoardList';
import BoardView from 'components/board/BoardView';
import PageHeader from 'components/PageHeader';
import {MDBContainer} from 'mdbreact';
import queryString from 'query-string';
import * as event from'service/event';
// css, scss
import "css/print.scss";
// img
import headerImg from 'img/print/pageheader.jpg';

class Print extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bo_table:"prints",
      category:"",
      boardList : []
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params !== prevState.board) {
      return {
        category : nextProps.match.params.category
      }
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (this.props !== prevProps) {
      this.getListData(window.location.host ,"printlist", this.state.bo_table, this.state.category, 1);
    }
  }
  componentDidMount() {
    this.getListData(window.location.host ,"printlist", this.state.bo_table, this.state.category, 1);
    event.pagenations("Print", "2")
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
      <main id="printPage">
        <PageHeader 
          page="print"
          pagebg={headerImg}
          pageText="인쇄장비"
          title="printis 인쇄장비"
        />
        <section id="printConts">
          <div id="printNavs">
            <MDBContainer>
              <ul id="printNavList" className="clear subNav">
                <li>
                  <NavLink activeClassName="active" to={"/printis/Print/print/"}>인쇄장비</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/printis/Print/label/"}>라벨장비</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/printis/Print/engraving/"}>제판설비</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/printis/Print/dry/"}>건조장비</NavLink>
                </li>
              </ul>
            </MDBContainer>
          </div>
          <div id="printConts" className="boardListConts">
            <MDBContainer>
              {!query.wr_id ? (
                <BoardList 
                  page="Print"
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

export default Print;