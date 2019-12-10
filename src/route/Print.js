import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import * as board from'service/board';
import BoardList from 'components/board/BoardList';
import BoardView from 'components/board/BoardView';

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
    return ( 
      <div>
        <ul className="clear subNav">
          <li>
            <Link to={"/printice/Print/print/"}>인쇄장비</Link>
          </li>
          <li>
            <Link to={"/printice/Print/label/"}>라벨장비</Link>
          </li>
          <li>
            <Link to={"/printice/Print/engraving/"}>제판설비</Link>
          </li>
          <li>
            <Link to={"/printice/Print/dry/"}>건조장비</Link>
          </li>
        </ul>
        <Switch >
          <Route 
            exact 
            path={this.props.match.url} 
            component={props=><BoardList list={this.state} />}
          />
          <Route 
            path={`${this.props.match.url}/:id`} 
            component={BoardView}
          />
        </Switch>
      </div>
    )
  }
}

export default Print;