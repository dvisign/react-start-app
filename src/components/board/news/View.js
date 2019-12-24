import React, { Component } from 'react'
import * as board from'service/board';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wr_subject : "",
      wr_datetime : "",
      wr_name : "",
      wr_content : ""
    }
  }
  componentDidUpdate(prevProps, prevState){
    if (this.props !== prevProps) {
      this.getViewData(window.location.host ,"view", this.props.match.params.board, this.props.match.params.id);
    }
  }
  componentDidMount() {
    this.getViewData(window.location.host ,"view", this.props.match.params.board, this.props.match.params.id);
  }
  getViewData = async (server,status, bo_table, wr_id) => {
    var viewData = await Promise.all([
      board.getViewData(server, status, bo_table, wr_id)
    ])
    this.setState(prevState => ({
      wr_subject : viewData[0][0]["wr_subject"],
      wr_datetime : viewData[0][0]["wr_datetime"],
      wr_name : viewData[0][0]["wr_name"],
      wr_content : viewData[0][0]["wr_content"]
    }));
  }
  render() {
    console.log("view render")
    console.log(this.state)
    return (
      <div id="boardView">
        <h2 className="sectionSubTitles">{this.state.wr_subject}</h2>
        <div id="productImg">
          <div dangerouslySetInnerHTML={{__html: this.state.wr_content}} />
        </div>
      </div>
    )
  }
}

export default View;