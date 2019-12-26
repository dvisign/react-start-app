import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import * as board from'service/board';
// import * as event from'service/event';
import { IoIosArrowForward, IoIosArrowBack, IoIosList, IoIosEye } from "react-icons/io";

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wr_subject : "",
      wr_datetime : "",
      wr_name : "",
      wr_content : "",
      next_wr_id : "",
      prev_wr_id : ""
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    var animate = false
    if (prevProps.match.params.id !== this.props.match.params.id) {
      animate = true
    }
    return {
      animate
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    if (this.props !== prevProps) {
      this.getViewData(window.location.host ,"view", this.props.match.params.board, this.props.match.params.id);
      if (snapshot === true) {
        // event.pageIn("#boardView");
      }
    }
  }
  componentDidMount() {
    this.getViewData(window.location.host ,"view", this.props.match.params.board, this.props.match.params.id);
  }
  getViewData = async (server,status, bo_table, wr_id) => {
    var viewData = await Promise.all([
      board.getViewData(server, status, bo_table, wr_id)
    ])
    this.setState({
      wr_subject : viewData[0][0]["wr_subject"],
      wr_datetime : viewData[0][0]["wr_datetime"],
      wr_name : viewData[0][0]["wr_name"],
      wr_hit : viewData[0][0]["wr_hit"],
      wr_content : viewData[0][0]["wr_content"],
      next_wr_id: viewData[0][0]["next_wr_id"],
      prev_wr_id: viewData[0][0]["prev_wr_id"]
    });
  }
  render() {
    return (
      <div id="boardView">
        <div id="boardHeader">
          <div id="boardSubject">
            <h2 className="sectionSubTitles">{this.state.wr_subject}</h2>
          </div>
          <div id="writeInfo" className="clear">
            <p><span>작성자</span><span>{this.state.wr_name}</span></p>
            <p><span><IoIosEye/></span><span>{this.state.wr_hit}회</span></p>
            <p><span>{this.state.wr_datetime}</span></p>
          </div>
        </div>
        <div id="boardContents">
          <div dangerouslySetInnerHTML={{__html: this.state.wr_content}} />
        </div>
        <div id="boardNextPrevLink" className="clear">
          <div id="prevLinks" className="nextprevLink">
          {this.state.prev_wr_id !== null ? (
            <Link to={this.state.prev_wr_id}><IoIosArrowBack/>이전글</Link>
          ) : (
            ""
          )}
          </div>
          <div id="nextLinks" className="nextprevLink">
          {this.state.next_wr_id !== null ? (
            <Link to={this.state.next_wr_id}>다음글<IoIosArrowForward/></Link>
          ) : (
            ""
          )}
          </div>
          <div id="listLink">
            <Link to={"/"+this.props.match.params.page+"/"+this.props.match.params.board+"/"+this.props.match.params.pager}><IoIosList />목록</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default View;