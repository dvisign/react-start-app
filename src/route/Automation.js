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
import "css/auto.scss";
// img
import headerImg from 'img/print/pageheader.jpg';

class Automation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bo_table:"autos",
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
    event.pagenations("Automation", "3")
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
      <main id="autoPage">
        <PageHeader 
          page="Automation"
          pagebg={headerImg}
          pageText="자동화 장비"
          title="printis 자동화 장비"
        />
        <section id="printConts">
          <div id="printNavs">
            <MDBContainer>
              <ul id="printNavList" className="clear subNav">
                <li>
                  <NavLink activeClassName="active" to={"/printis/Automation/touch/"}>터치설비 / 장비</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/printis/Automation/robot/"}>로보트 자동화</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to={"/printis/Automation/auto/"}>자동설비 / 장비</NavLink>
                </li>
              </ul>
            </MDBContainer>
          </div>
          <div id="autoConts" className="boardListConts">
          <MDBContainer>
              {!query.wr_id ? (
                <BoardList 
                  page="Automation"
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

export default Automation;