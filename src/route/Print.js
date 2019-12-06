import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import BoardList from 'components/board/BoardList'
import BoardView from 'components/board/BoardView'

class Print extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bo_table:"prints",
      category:""
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.location.search !== prevState.board) {
      return {
        category : nextProps.match.params.category
      }
    }
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
        <Route 
          exact 
          path={this.props.match.url} 
          render={props=><BoardList bo_table={this.state.bo_table} category={this.state.category} status={"list"} />}
        />
        <Route 
          path={`${this.props.match.url}/:cate`} 
          render={props=><BoardView bo_table={this.state.bo_table} category={this.state.category} status={"view"} />}
        />
      </div>
    )
  }
}

export default Print;